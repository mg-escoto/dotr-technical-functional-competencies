import json

PATH = "lib/data/technical-competencies.json"

OFFICES = {
    1: "Executive Offices",
    2: "Office of the Secretary",
    3: "Administrative Service",
    4: "Management Information Systems Service",
    5: "Procurement Management Service",
    6: "Finance Service",
    7: "Corporate Planning and Management Service",
    8: "Internal Audit Service",
    9: "Legal Service",
    10: "Project Development Service",
    11: "Project Monitoring and Evaluation Service",
    12: "Transport Policy and Planning Service",
    13: "Rail Unified Project Management Office",
    14: "Rail Standard Enforcement Office",
    15: "Philippine Railways Institute",
    99: "Needs Placement",
}

# code -> (officeOrder, new name override or None, parentCode or None)
EXISTING_PLACEMENT = {
    "EO": (1, None, None),
    "SAICT": (2, None, None),
    "AMD": (3, None, None),
    "CASH": (3, None, None),
    "GSD": (3, None, None),
    "DENTAL": (3, None, "GSD"),
    "HRDD": (3, None, None),
    "CNSD": (4, "Computer and Network Systems Division", None),
    "CMD": (5, None, None),
    "PPMD": (5, "Procurement Planning and Management Division", None),
    "MAD": (8, "Internal Audit Division I", None),  # see note below
    "ICD": (12, None, None),
    "OMSMMD": (13, None, None),
    "PDID": (13, None, None),
    "ROWSA": (14, None, None),
    "SCED": (14, None, None),
    "SRD": (14, None, None),
    "PMO-MARITIME": (99, None, None),
}

MAD_NOTE = (
    "This framework's source document is titled \"Management Audit Division\" but "
    "explicitly states it is based on the CY 2026 DPCR of Internal Audit Division I. "
    "Renamed here to match the organizational chart — flag if these are actually "
    "distinct offices."
)

# (code, name, officeOrder, parentCode)
NEW_PLACEHOLDERS = [
    ("INFO", "Information Division", 2, None),
    ("CRD", "Central Records Division", 3, None),
    ("HRMD", "Human Resource Management Division", 3, None),
    ("ISSD", "Information Systems and Security Division", 4, None),
    ("ACCTG", "Accounting Division", 6, None),
    ("BUDGET", "Budget Division", 6, None),
    ("MGMT", "Management Division", 7, None),
    ("PMMD", "Performance Monitoring and Management Division", 7, None),
    ("IAD2", "Internal Audit Division II", 8, None),
    ("CRDD", "Contract Review and Documentation Division", 9, None),
    ("INVAD", "Investigation and Adjudication Division", 9, None),
    ("LARD", "Legal Affairs and Research Division", 9, None),
    ("LID", "Legislative and Issuances Division", 9, None),
    ("ATPDD", "Air Transport Project Development Division", 10, None),
    ("MTPDD", "Maritime Transport Project Development Division", 10, None),
    ("RTPDD", "Rail Transport Project Development Division", 10, None),
    ("RDPDD", "Road Transport Project Development Division", 10, None),
    ("INSAD", "Inspection and Acceptance Division", 11, None),
    ("MEDD", "Monitoring, Evaluation, and Documentation Division", 11, None),
    ("ITPD", "Integrated Transport Planning Division", 12, None),
    ("IPD", "Investment Programming Division", 12, None),
    ("PRDD", "Policy Research and Development Division", 12, None),
    ("TSKMD", "Transport Statistics and Knowledge Management Division", 12, None),
    ("NDTSD", "Network Development and Technical Services Division", 13, None),
    ("SUPPORT", "Support Division", 13, None),
    ("CAD", "Certification and Accreditation Division", 15, None),
    ("RDD", "Research and Development Division", 15, None),
    ("TD", "Training Division", 15, None),
]


def main():
    d = json.load(open(PATH))
    by_code = {x["code"]: x for x in d}

    for code, (order, new_name, parent) in EXISTING_PLACEMENT.items():
        x = by_code[code]
        x["office"] = OFFICES[order]
        x["officeOrder"] = order
        x["status"] = "populated"
        x["parentCode"] = parent
        if new_name:
            x["name"] = new_name
        if code == "MAD":
            x["reorgNote"] = MAD_NOTE
        elif code == "PMO-MARITIME":
            x["reorgNote"] = (
                "Not mentioned in the latest organizational chart taxonomy — placed here "
                "pending confirmation of where it belongs."
            )

    for code, name, order, parent in NEW_PLACEHOLDERS:
        d.append({
            "code": code,
            "name": name,
            "category": None,
            "status": "under-construction",
            "office": OFFICES[order],
            "officeOrder": order,
            "parentCode": parent,
            "sourceFile": None,
            "basis": None,
            "careerProgression": None,
            "competencies": [],
        })

    # stable sort: office order, then parent-before-child, then name
    def sort_key(x):
        return (x["officeOrder"], 1 if x.get("parentCode") else 0, x["name"])

    d.sort(key=sort_key)

    json.dump(d, open(PATH, "w"), indent=2, ensure_ascii=False)
    print(f"Total divisions: {len(d)}")
    for x in d:
        tag = "★" if x["status"] == "populated" else "·"
        parent = f" (under {x['parentCode']})" if x.get("parentCode") else ""
        print(f"  [{x['officeOrder']:>2}] {tag} {x['code']:<14} {x['name']}{parent}")


if __name__ == "__main__":
    main()

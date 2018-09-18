
export default [
    {
        "name": "DNA",
        "sections": [
            {
                "id": "biocad.palette.sbolv",
                "name": "Transcription",
                "description": "Fundamental transcription machinery such as promoters, RBSs, CDSs and terminators.",
                "members": [
                    "cds",
                    "rbs",
                    "promoter",
                    "operator",
                    "terminator"
                ]
            },
            {
                "id": "biocad.palette.sbolv",
                "name": "Restriction",
                "icon": "scissors",
                "description": "Sites for recognition of restriction endonucleases.",
                "members": [
                    "restriction_site",
                    "blunt_restriction_site",
                ]
            },
            {
                "id": "biocad.palette.sbolv",
                "name": "Gene Products",
                "description": "Annotations of gene products on a DNA level, such as the encoding regions of protein domains.",
                "members": [
                ]
            },
            {
                "id": "biocad.palette.sbolv",
                "name": "Molecules",
                "description": "Molecular species such as small molecules, complexes, macromolecules.",
                "members": [
                    "protein"
                ]
            }
        ]
    },
    {
        "name": "Protein",
        "sections": [
            {
                "id": "biocad.palette.sbolv",
                "name": "protlang",
                "description": "protlang stuff",
                "members": [
                    "linker",
                    "stability-element",
                    "localization-tag-reversible",
                    "localization-tag-irreversible",
                    "covalent-modification",
                    "catalytic-site",
                    "binding-site",
                    "biochemical-tag",
                    "protein-cleavage-site",
                    "degradation-tag",
                    "defined-region",
                    "membrane-static"
                ]
            }
        ]
    }
]

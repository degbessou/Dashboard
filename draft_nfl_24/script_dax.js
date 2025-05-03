// script dax
% Position dominante = 
VAR PosTable = SUMMARIZE(Draft2024, Draft2024[Poste], "NbJoueurs", COUNT(Draft2024[Joueur]))
VAR MaxCount = MAXX(PosTable, [NbJoueurs])
VAR TotalPlayers = COUNTROWS(Draft2024)
VAR PctDom = DIVIDE(MaxCount, TotalPlayers) * 100 
RETURN FORMAT(PctDom, "0") & "% des picks"

//
Position dominante = 
VAR PosTable = SUMMARIZE(Draft2024, Draft2024[Poste], "NbJoueurs", COUNT(Draft2024[Joueur]))
VAR MaxCount = MAXX(PosTable, [NbJoueurs])
VAR DomPos = CALCULATE(
    VALUES(Draft2024[Poste]),
    FILTER(
        SUMMARIZE(Draft2024, Draft2024[Poste], "NbJoueurs", COUNT(Draft2024[Joueur])),
        [NbJoueurs] = MaxCount
    )
)
RETURN DomPos

//
Total Joueurs = COUNTROWS('Draft2024')

//
Total QB = CALCULATE(COUNTROWS('Draft2024'), 'Draft2024'[Poste] = "QB")

// 
Equipe dominante = 
VAR PosTable = SUMMARIZE(Draft2024, Draft2024[Équipe], "NbJoueurs", COUNT(Draft2024[Joueur]))
VAR MaxCount = MAXX(PosTable, [NbJoueurs])
VAR DomPos = CALCULATE(
    VALUES(Draft2024[Équipe]),
    FILTER(
        SUMMARIZE(Draft2024, Draft2024[Équipe], "NbJoueurs", COUNT(Draft2024[Joueur])),
        [NbJoueurs] = MaxCount
    )
)
RETURN DomPos

// 
Univ dominante = 
VAR UnivTable = SUMMARIZE(Draft2024, Draft2024[Université], "NbJoueurs", COUNT(Draft2024[Joueur]))
VAR MaxCount = MAXX(UnivTable, [NbJoueurs])
VAR DomUniv = CALCULATE(
    VALUES(Draft2024[Université]),
    FILTER(
        SUMMARIZE(Draft2024, Draft2024[Université], "NbJoueurs", COUNT(Draft2024[Joueur])),
        [NbJoueurs] = MaxCount
    )
)
RETURN DomUniv


//
Univ dominante = 
VAR UnivTable = SUMMARIZE(Draft2024, Draft2024[Université], "NbJoueurs", COUNT(Draft2024[Joueur]))
VAR MaxCount = MAXX(UnivTable, [NbJoueurs])
VAR TopUnivs = FILTER(
    SUMMARIZE(Draft2024, Draft2024[Université], "NbJoueurs", COUNT(Draft2024[Joueur])),
    [NbJoueurs] = MaxCount
)
VAR UnivCount = COUNTROWS(TopUnivs)
VAR FirstUniv = MINX(TopUnivs, Draft2024[Université])
VAR ResultText = 
    IF(
        UnivCount = 1,
        FirstUniv,
        FirstUniv & 
        " (et " & 
        FORMAT(UnivCount - 1, "0") & 
        IF(UnivCount - 1 = 1, " autre)", " autres)")
    )
RETURN ResultText

//
Position dominante = 
VAR PosTable = SUMMARIZE(Draft2024, Draft2024[Poste], "NbJoueurs", COUNT(Draft2024[Joueur]))
VAR MaxCount = MAXX(PosTable, [NbJoueurs])
VAR DomPos = CONCATENATEX(
    FILTER(
        SUMMARIZE(Draft2024, Draft2024[Poste], "NbJoueurs", COUNT(Draft2024[Joueur])),
        [NbJoueurs] = MaxCount
    ),
    Draft2024[Poste],
    ", "
)
RETURN DomPos

//
Equipe dominante = 
VAR EquipeTable = SUMMARIZE(Draft2024, Draft2024[Équipe], "NbJoueurs", COUNT(Draft2024[Joueur]))
VAR MaxCount = MAXX(EquipeTable, [NbJoueurs])
VAR TopEquipes = FILTER(
    SUMMARIZE(Draft2024, Draft2024[Équipe], "NbJoueurs", COUNT(Draft2024[Joueur])),
    [NbJoueurs] = MaxCount
)
VAR EquipeCount = COUNTROWS(TopEquipes)
VAR FirstEquipe = MINX(TopEquipes, Draft2024[Équipe])
VAR ResultText = 
    IF(
        EquipeCount = 1,
        FirstEquipe,
        FirstEquipe & 
        " (et " & 
        FORMAT(EquipeCount - 1, "0") & 
        IF(EquipeCount - 1 = 1, " autre)", " autres)")
    )
RETURN ResultText
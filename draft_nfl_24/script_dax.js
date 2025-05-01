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
VAR PosTable = SUMMARIZE(Draft2024, Draft2024[�quipe], "NbJoueurs", COUNT(Draft2024[Joueur]))
VAR MaxCount = MAXX(PosTable, [NbJoueurs])
VAR DomPos = CALCULATE(
    VALUES(Draft2024[�quipe]),
    FILTER(
        SUMMARIZE(Draft2024, Draft2024[�quipe], "NbJoueurs", COUNT(Draft2024[Joueur])),
        [NbJoueurs] = MaxCount
    )
)
RETURN DomPos

// 
Univ dominante = 
VAR UnivTable = SUMMARIZE(Draft2024, Draft2024[Universit�], "NbJoueurs", COUNT(Draft2024[Joueur]))
VAR MaxCount = MAXX(UnivTable, [NbJoueurs])
VAR DomUniv = CALCULATE(
    VALUES(Draft2024[Universit�]),
    FILTER(
        SUMMARIZE(Draft2024, Draft2024[Universit�], "NbJoueurs", COUNT(Draft2024[Joueur])),
        [NbJoueurs] = MaxCount
    )
)
RETURN DomUniv

R�PARTITION DES JOUEUR PAR �QUIPE ET POSTE #15C6F4
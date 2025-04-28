-- Update for Position Names (Poste_nom)
UPDATE D24.selection 
SET Poste_nom =
    CASE 
        WHEN Poste = 'C'   THEN 'Center'
        WHEN Poste = 'CB'  THEN 'Cornerback'
        WHEN Poste = 'DB'  THEN 'Defensive back'
        WHEN Poste = 'DE'  THEN 'Defensive end'
        WHEN Poste = 'DL'  THEN 'Defensive lineman'
        WHEN Poste = 'DT'  THEN 'Defensive tackle'
        WHEN Poste = 'FB'  THEN 'Fullback'
        WHEN Poste = 'FS'  THEN 'Free safety'
        WHEN Poste = 'G'   THEN 'Guard'
        WHEN Poste = 'K'   THEN 'Kicker'
        WHEN Poste = 'KR'  THEN 'Kickoff returner'
        WHEN Poste = 'LB'  THEN 'Linebacker'
        WHEN Poste = 'LS'  THEN 'Long snapper'
        WHEN Poste = 'MLB' THEN 'Middle linebacker'
        WHEN Poste = 'NT'  THEN 'Nose tackle'
        WHEN Poste = 'OLB' THEN 'Outside linebacker'
        WHEN Poste = 'OL'  THEN 'Offensive lineman'
        WHEN Poste = 'OT'  THEN 'Offensive tackle'
        WHEN Poste = 'P'   THEN 'Punter'
        WHEN Poste = 'PR'  THEN 'Punt returner'
        WHEN Poste = 'QB'  THEN 'Quarterback'
        WHEN Poste = 'RB'  THEN 'Running back'
        WHEN Poste = 'RS'  THEN 'Return specialist'
        WHEN Poste = 'S'   THEN 'Safety'
        WHEN Poste = 'SS'  THEN 'Strong safety'
        WHEN Poste = 'TE'  THEN 'Tight end'
        WHEN Poste = 'WR'  THEN 'Wide receiver'
        WHEN Poste = 'OG'  THEN 'Guard'
    ELSE Poste_nom
END;

--UPDATE D24.selection SET Poste_nom = 'Guard' WHERE Poste = 'OG';
-- Update for Group Positions (Groupe_poste)
-- Offensive Line (OL)
UPDATE D24.selection SET Groupe_poste = 'OL' WHERE Poste IN ('C', 'G', 'OL', 'OT', 'FB', 'OG');
--UPDATE D24.selection SET Groupe_poste = 'OL' WHERE Poste = 'OG';

-- Defensive Line (DL)
UPDATE D24.selection SET Groupe_poste = 'DL' WHERE Poste IN ('DB', 'DL', 'DT', 'LB', 'MLB', 'NT', 'OLB', 'SS');

-- Special Teams (SP)
UPDATE D24.selection SET Groupe_poste = 'SP' WHERE Poste IN ('KR', 'LS', 'PR', 'RS', 'FS');

--
UPDATE D24.selection 
SET Groupe_poste =
    CASE
        WHEN Poste = 'QB'  THEN 'QB'
        WHEN Poste = 'RB'  THEN 'RB'
        WHEN Poste = 'TE'  THEN 'TE'
        WHEN Poste = 'WR'  THEN 'WR'
        WHEN Poste = 'CB'  THEN 'CB'
        WHEN Poste = 'S'   THEN 'S' 
        WHEN Poste = 'DE'  THEN 'DE'
        WHEN Poste = 'K'   THEN 'K' 
        WHEN Poste = 'P'   THEN 'P' 
    ELSE Groupe_poste
END;

----
-- Mise � jour de tous les groupes de conf�rences en une seule instruction
UPDATE D24.selection 
SET Groupe_conf = 
    CASE 
        -- Power Five conf�rences - garder les noms d'origine
        WHEN Conf�rence = 'ACC' THEN 'ACC'
        WHEN Conf�rence = 'Big Ten' THEN 'Big Ten'
        WHEN Conf�rence = 'Big 12' THEN 'Big 12'
        WHEN Conf�rence = 'Pac-12' THEN 'Pac-12'
        WHEN Conf�rence = 'SEC' THEN 'SEC'
        
        -- Group of Five conf�rences - garder les noms d'origine
        WHEN Conf�rence = 'The American' THEN 'The American'
        WHEN Conf�rence = 'CUSA' THEN 'CUSA'
        WHEN Conf�rence = 'MAC' THEN 'MAC'
        WHEN Conf�rence = 'MW' THEN 'MW'
        WHEN Conf�rence = 'Sun Belt' THEN 'Sun Belt'
        
        -- FBS Independent
        WHEN Conf�rence = 'Ind. (FBS)' THEN 'FBS'
        
        -- FCS conf�rences
        WHEN Conf�rence IN ('Patriot', 'Southland', 'MVFC', 'CAA', 'Ivy', 'BSC�OVC') THEN 'FCS'
        
        -- Autres conf�rences
        WHEN Conf�rence IN ('CWUAA', 'CFL', 'UAC', 'G-MAC', 'English') THEN 'Other'
        
        -- Si aucune condition n'est remplie, conserver la valeur existante
        ELSE Groupe_conf
    END;
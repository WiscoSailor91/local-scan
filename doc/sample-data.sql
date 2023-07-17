# DELETE FROM local_scan.eve_character;
# DELETE FROM local_scan.eve_corporation;
# DELETE FROM local_scan.eve_alliance;

INSERT INTO local_scan.eve_alliance (allianceId, ticker, name)
VALUES (99004567, 'THIRD', 'Honorable Third Party'),
       (99007716, 'T.R.C', 'The Rogue Consortium');

INSERT INTO local_scan.eve_corporation (corporationId, allianceId, ticker, name)
VALUES (98054273, 99004567, 'CANBA', 'Canadian Bacon.'),
       (98430069, 99007716, 'RMRMC', 'Rumors Mining Corp'),
       (98528301, 99007716, 'T.DCC', 'The Directorate Council');

INSERT INTO local_scan.eve_character (characterId, corporationId, name)
VALUES (94165960, 98054273, 'Skyhawk Everheart'),
       (94929347, 98430069, 'Colbert Everheart'),
       (96157337, 98528301, 'Altimuss Prime'),
       (2114915639, 98430069, 'Everheart'),
       (96329242, 98430069, 'Mason Everheart');

# A character without an alliance
INSERT INTO local_scan.eve_corporation (corporationId, allianceId, ticker, name)
VALUES (1000167, NULL, 'SWA', 'State War Academy');
INSERT INTO local_scan.eve_character (characterId, corporationId, name)
VALUES (2115220945, 1000167, 'Damian Mabata');

SELECT a.allianceId, ch.corporationId, ch.characterId,
       a.name AS allianceName, a.ticker AS allianceTicker,
       co.name AS corporationName, co.ticker AS corporationTicker,
       ch.name AS characterName
FROM eve_character AS ch
         INNER JOIN eve_corporation AS co ON ch.corporationId = co.corporationId
         LEFT OUTER JOIN eve_alliance AS a on co.allianceId = a.allianceId;

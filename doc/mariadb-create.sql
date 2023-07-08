CREATE TABLE local_scan.eve_alliance (
    allianceId INT NOT NULL,
    ticker VARCHAR(5) CHARACTER SET utf8mb4 NOT NULL,
    name VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL,
    CONSTRAINT eve_alliance_pk PRIMARY KEY (allianceId)
);

CREATE TABLE local_scan.eve_corporation (
    corporationId INT NOT NULL,
    allianceId INT NULL,
    ticker VARCHAR(5) CHARACTER SET utf8mb4 NOT NULL,
    name VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL,
    CONSTRAINT eve_corporation_pk PRIMARY KEY (corporationId)
);

ALTER TABLE local_scan.eve_corporation ADD CONSTRAINT eve_corporation_alliance_fk
FOREIGN KEY (allianceId) REFERENCES local_scan.eve_alliance (allianceId);

CREATE TABLE local_scan.eve_character (
    characterId INT NOT NULL,
    corporationId INT NOT NULL,
    name VARCHAR(37) CHARACTER SET utf8mb4 NOT NULL,
    CONSTRAINT character_pk PRIMARY KEY (characterId)
);

ALTER TABLE local_scan.eve_character ADD CONSTRAINT eve_character_corporation_fk
FOREIGN KEY (corporationId) REFERENCES local_scan.eve_corporation (corporationId);
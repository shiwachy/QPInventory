create database QPInventoryDB
use QPInventoryDB

CREATE TABLE mst_hyperlinks(
	hyperlinkId INT IDENTITY(1,1) PRIMARY KEY,
	hyperlink VARCHAR(MAX)
)

CREATE TABLE mst_keywords(
	keywordId INT IDENTITY(1,1) PRIMARY KEY,
	keyword VARCHAR(MAX)
)


CREATE TABLE tran_link_Keyword(
	hyperlinkId INT FOREIGN KEY(hyperlinkId) REFERENCES mst_hyperlinks(hyperlinkId),
	keywordId INT FOREIGN KEY(keywordId) REFERENCES mst_keywords(keywordId)
)
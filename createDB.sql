CREATE TABLE SiteExcavators (
	SiteName TEXT, 
	ExcavatorID INTEGER
);

CREATE TABLE SiteArtefacts (
	SiteName TEXT, 
	Find INTEGER
);

CREATE TABLE Sites (
	SiteName TEXT, 
	Lat INTEGER, 
	Long INTEGER, 
	Shahrestan TEXT, 
	Baksh TEXT
);

CREATE TABLE Artefacts (
	ArtefectType TEXT, 
	Trench INTEGER, 
	Context INTEGER, 
	Find INTEGER
);

CREATE TABLE Excavators (
	ExcavatorID INTEGER PRIMARY KEY AUTOINCREMENT, 
	Title TEXT, 
	FirstName TEXT, 
	LastName TEXT, 
	Email TEXT
);
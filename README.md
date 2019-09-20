# MaintenanceProject
Razvoj Web aplikacija

Maintence System for Tehnician in Fun park Biograd

Maintence System zamisljen je kako bi olaksao Tehnicarima u Fun parku Biograd svakodnevno pregledavanje atrakcija po cijelom parku. Dosadasnja check-iranja atrakcija obavljaju se putem papirnatih formi gdje je ispasana pojedinacna atrakcija te pripadajuci elementi koji se svakodnevno provjeravaju. Nakon provjere pripadajucih elemenata po atrakcijama, tehnicar svojim potpisom potvrduje pregledano, te je s tim zavrsio dnevni check in.

Aplikacija je osmisljena na istom principu , osim sto ovim putem svaki Tehnicar (User) dobiva svoje korisnicko Ime (Username) te pripadajuci password za pristup dnevnim check listama.

Za potrebe ovog kolegija, napravljen je Admin dio koji nakon logiranja moze upravljati korisnicima, kao na primjer , dodavati nove korisnike ili prema potrebi ukloniti postojece korisnike, takoder, moze dodati novu atrakciju kao i za odabranu atrakciju dodavati pripadajuce elemente za svakodevnu provjeru. Takoder, moze pregledati status Check listova tijekom dana.

Za ulazak u admin sucelje, koristi se Username: "Admin", te password:"123456".

Takoder, vazno je napomenuti kako sve unesene lozinke spremaju se u bazu u kriptiranom obliku, kako bi onemogucili zlouporabu podataka od mogucih upada u bazu.

Prilikom logiranja, bio to obican User (Tehnicar) ili Admin , kreira se poseban "token" broj koji vrijedi sve dok su User ili Admin aktivni, a sve to iz razloga kako bi onemogucili neovlasteno "upadanje" preko URL-a u Admin sucelje ukoliko smo logirani kao User ili obrnuto u koliko smo logirani kao Admin. Svakim novim logiranjem, kreira se novi "Token" kod.

Front-end aplikacije napravljen je u Angularu verzija 7.0 kao Framework za TypeScript, dok za Back-end koristimo PHP te MYSQL kao bazu.


fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/restaurant-bresilien.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {

        //h1
        let titre = document.getElementById("nomCommercial");
        // object.key
        // objet[key]
        let nomCommercial = data["nomCommercial"];
        titre.textContent = nomCommercial;

        // h2
        let soustitre = document.getElementById("texteAccroche");
        let texteAccroche = data["texteAccroche"];
        soustitre.textContent = texteAccroche;

        //call to action
        let calltoaction = document.getElementById("texteBouton");
        let texteBouton = data["texteBouton"];
        calltoaction.textContent = texteBouton;

        //promessesClient
        data["promessesClient"].forEach(element => {
            console.log(element);
            let p = document.createElement("p");
            p.textContent = element;
            let promesse = document.getElementById("promessesClient");
            promesse.appendChild(p);

        });

        data["plats"].forEach(element => {
            let div = document.createElement("div");
            console.log(element.desc);
            let h3 = document.createElement("h3")
            h3.textContent = element.nom;
            let p = document.createElement("p");
            p.textContent = element.desc;
            let img = document.createElement("img");
            img.src = element["image-url"];
            let plat = document.getElementById("platscontainer");


            plat.appendChild(div);
            div.appendChild(h3);
            div.appendChild(p);
            div.appendChild(img);

        });

        data["services"].forEach(element => {
            let div = document.createElement("div");
            let h4 = document.createElement("h4");
            h4.textContent = element.nom;
            let p = document.createElement("p");
            p.textContent = element.desc;
            let service = document.getElementById("servicescontainer");

            service.appendChild(div);
            div.appendChild(h4);
            div.appendChild(p);
        });

        data["temoignages"].forEach(element => {
            let div = document.createElement("div");
            let h5 = document.createElement("h5");
            h5.textContent = element.prenom;
            let p = document.createElement("p");
            p.textContent = element.typeExperience;
            let a = document.createElement("p");
            a.textContent = element.commentaire;
            let pra = document.createElement("p");
            pra.textContent = element.note;
            let temoignage = document.getElementById("aviscontainer");

            temoignage.appendChild(div);
            div.appendChild(h5);
            div.appendChild(p);
            div.appendChild(a);
            div.appendChild(pra);


        });
})









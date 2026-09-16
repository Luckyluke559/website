// Ihr exakter, sauberer Formular-Link ohne "dtable"
    const SEATABLE_FORM_URL = "https://cloud.seatable.io/dtable/forms/41ba1ebb-59fb-4971-8133-2e7e09c6d4e7/";

    function berechnePreis() {
        let basisPreis = 5.00;
        if (document.getElementById("size").value === "mittel") basisPreis += 2.00;
        if (document.getElementById("size").value === "riesig") basisPreis += 5.00;
        if (document.getElementById("deliverytime").value === "express") basisPreis += 3.00;

        document.getElementById("finaler-preis").innerText = basisPreis.toFixed(2).replace(".", ",");
        return basisPreis;
    }

        function oeffneBriefkasten() {
        let groesseText = document.getElementById("size").options[document.getElementById("size").selectedIndex].text;
        let farbeText = document.getElementById("color").options[document.getElementById("color").selectedIndex].text;
        let lieferzeitText = document.getElementById("deliverytime").options[document.getElementById("deliverytime").selectedIndex].text;
       
        // 1. Berechnet den reinen Zahlenwert (z.B. 8.5)
        let reinerPreis = berechnePreis(); 
        
        // 2. Macht daraus Text mit Komma und Euro-Zeichen (z.B. "8,50 €")
        let formatierterPreis = reinerPreis.toFixed(2).replace(".", ",") + " €";

        // 3. Verpackt die Werte sicher für den Link
            let prefillUrl = SEATABLE_FORM_URL + 
                         "?prefill_Produkt=" + encodeURIComponent("Oktopus") +
                         "?prefill_Größe=" + encodeURIComponent(groesseText) + 
                         "&prefill_Farbe=" + encodeURIComponent(farbeText) + 
                         "&prefill_Lieferzeit=" + encodeURIComponent(lieferzeitText) + 
                         "&prefill_Preis=" + encodeURIComponent(formatierterPreis);

        // Öffnet das Formular perfekt ausgefüllt in einem neuen Browser-Tab
        window.open(prefillUrl, '_blank');
    }
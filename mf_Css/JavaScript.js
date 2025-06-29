﻿/*! Invoice Template Generator @author: Invoicebus @email: info@invoicebus.com @web: https://invoicebus.com @version: 1.0.0 @updated: 2017-11-17 13:11:43 @license: MIT */ ! function () {
    document.getElementsByTagName("html")[0].style.position = "absolute", document.getElementsByTagName("html")[0].style.top = "-100000px", document.body.style.position = "absolute", document.body.style.top = "-100000px";
    var a, b, c, d = function () {
        for (var a = document.getElementsByTagName("script"), b = 0; b < a.length; b++) {
            var c = a[b].src,
                d = c.indexOf("generator" + h + ".js");
            if (d > -1) return c.substring(0, d)
        }
    },
		e = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
		f = "?utm_source=generator&utm_medium=template&utm_campaign=invoicebus_templates",
		g = "https://invoicebus.com/saveinvoice/",
		h = ".min",
		i = d(),
		j = i + "jquery.min.js",
		k = i + "bootstrap.min.js",
		l = function () {
		    var a = document.createElement("div");
		    return a.innerHTML = "Oops sorry, the template cannot be rendered. Mind checking your internet connection?", a.setAttribute("style", 'position:fixed; top:0px; left:0px; background:#f75520; color:white; text-align:center; width:100%; padding:10px 0; font:normal 14px/1.4em "Open Sans", Arial, Sans-serif; border-bottom:3px solid #fff; box-shadow:0px 0px 10px 2px #aaa;'), document.body.appendChild(a), !1
		},
		m = 100,
		n = 0,
		o = 5e3,
		p = function (a) {
		    var b = document.createElement("script");
		    b.async = !0, b.type = "text/javascript", b.src = a, document.body.appendChild(b)
		},
		q = function (a) {
		    return n > o ? l() : (window.jQuery ? (p(k), r(a)) : setTimeout(function () {
		        q(a)
		    }, m), void (n += m))
		},
		r = function (a) {
		    return n > o ? l() : (jQuery.fn.tooltip ? a(jQuery) : setTimeout(function () {
		        r(a)
		    }, m), void (n += m))
		},
		s = function () {
		    $("link[data-href]").each(function (a, b) {
		        $(b).attr("href", $(b).data("href"))
		    })
		},
		t = function () {
		    $(function () {
		        x(), ib_loadBootstrapDatepicker(), ib_loadBootstrapTypeahead(), Ab(), K(), ob(), M(), qb(), Bb(), Z(), X(), Y(), H(), P(), C(), Gb(), s(), u()
		    })
		},
		u = function () {
		    var a = setInterval(function () {
		        for (var b = 0; b < document.styleSheets.length; b++)
		            if (-1 != document.styleSheets[b].href.indexOf("generator" + h + ".css")) {
		                $("html").removeAttr("style"), $("body").removeAttr("style"), clearInterval(a), window.status = "finished";
		                break
		            }
		    }, 10)
		},
		v = ["a", "b", "body", "br", "div", "em", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i", "img", "label", "li", "link", "meta", "ol", "p", "pre", "section", "script", "span", "strong", "style", "sub", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "ul"],
		w = ["cellpadding", "cellspacing", "charset", "class", "colspan", "content", "data-hide-on-quote", "data-href", "data-iterate", "data-logo", "dir", "height", "href", "http-equiv", "id", "lang", "name", "rel", "rowspan", "src", "style", "title", "type", "width"],
		x = function () {
		    $(document).find(":not(" + v.join(",") + ")").remove(), $("*").each(function () {
		        for (var a = 0; a < this.attributes.length; a++) -1 == w.indexOf(this.attributes[a].name) && this.removeAttribute(this.attributes[a].name)
		    }), $(document).find("a").each(function () {
		        0 === $(this).attr("href").indexOf("javascript") && $(this).removeAttr("href")
		    })
		},
		y = function () {
		    var a = navigator.userAgent;
		    return a.indexOf("MSIE ") > -1 || a.indexOf("Trident/") > -1 || a.indexOf("Edge/") > -1
		},
		z = function () {
		    var a = navigator.userAgent;
		    return a.indexOf("Safari/") > -1 && !(a.indexOf("Chrome/") > -1 || a.indexOf("OPR/") > -1)
		},
		A = function (a) {
		    return a ? a.replace(/<div>/gi, "<br />").replace(/<\/div>/gi, "").replace(/<\/p>(\r*|\n*)<p>/gi, "<br />").replace(/<(p|\/p)>/gi, "").replace(/<br\s*(\/|\s*)>/gi, "\n") : a
		},
		B = function (a) {
		    return a ? $("<div />").html(a).text() : a
		},
		C = function () {
		    setTimeout(function () {
		        $(document).tooltip({
		            selector: '[data-tooltip="tooltip"]',
		            html: !0,
		            container: "body"
		        })
		    }, 200)
		},
		D = !1,
		E = function () {
		    var a = $('[contenteditable="true"], [data-ibcl-id="issue_date"], [data-ibcl-id="due_date"]');
		    D ? (a.addClass("ib_editable_outline ib_stop_animate"), $(".ib_highlight_editable").addClass("active active_hover")) : (a.removeClass("ib_editable_outline"), $(".ib_highlight_editable").removeClass("active active_hover"))
		},
		F = {
		    en: {
		        long_name: "English",
		        long_name_en: "English",
		        change_lang: "Change the language to English",
		        print: "Print",
		        invoice: "Invoice",
		        print_info: "This command is also used to save<br/>the invoice as PDF. See FAQ for more info.",
		        highlight: "Highlight",
		        highlight_info: "Highlight editable fields",
		        open_data: "Open",
		        open_data_info: "Open already saved data.<br>The file must be loaded from the<br>same location as template.html",
		        text_format_alert: "Please upload text file. Supported format is .txt",
		        save_state: "Save State",
		        save_online: "Save Online",
		        save_info: "Save current invoice data such as<br/>company address, logo, etc., for future re-use",
		        online: "Online",
		        online_info: "You'll be taken to the Invoicebus website<br>to save this invoice online",
		        account_info: "You'll need Invoicebus account to save this invoice",
		        about: "About",
		        faq: "FAQ",
		        got_it: "OK, got it",
		        crafted_by: "Crafted with &#x2764; by",
		        invoicebus_mechanics: "The Invoicebus Mechanics",
		        add_new_row: "Add new row",
		        configure_columns: "Configure columns",
		        row_number: "Row number",
		        description: "Item",
		        quantity: "Quantity",
		        price: "Price",
		        discount: "Discount",
		        tax: "Tax",
		        line_total: "Linetotal",
		        insert_row: "Insert row",
		        remove_row: "Remove row",
		        drag_to_reorder: "Drag to reorder",
		        logo_upload_tooltip: "Drop image or click to upload your logo (max 2MB).<br>For better print resolution use larger image,<br>as it's automatically scaled down.",
		        drop_logo: "Drop your logo here",
		        remove_logo: "Remove logo",
		        image_format_alert: "Please upload image file. Supported formats are .png, .jpg ang .gif",
		        image_too_big_alert: "File too big, maximum size is 2MB",
		        currency_left: "Show currency on left",
		        currency_right: "Show currency on right",
		        company_name_tooltip: "Enter your company name",
		        company_address_tooltip: "Enter company's address",
		        company_city_zip_state_tooltip: "Enter company's zip, city and country",
		        company_phone_fax_tooltip: "Enter company's contact phones",
		        company_email_web_tooltip: "Enter company's web and email address",
		        payment_info1_tooltip: "Enter your payment details",
		        payment_info2_tooltip: "Enter other payment details",
		        payment_info3_tooltip: "Enter other payment details",
		        payment_info4_tooltip: "Enter other payment details",
		        payment_info5_tooltip: "Enter other payment details",
		        issue_date_label_tooltip: "Enter issue date label",
		        issue_date_tooltip: "Select invoice issue date",
		        net_term_label_tooltip: "Enter net days label",
		        net_term_tooltip: "Enter invoice net days",
		        due_date_label_tooltip: "Enter invoice due date label",
		        due_date_tooltip: "Select invoice due date",
		        currency_label_tooltip: "Enter invoice currency label",
		        currency_tooltip: "Enter invoice currency",
		        po_number_label_tooltip: "Enter P.O. label",
		        po_number_tooltip: "Enter P.O. Number",
		        bill_to_label_tooltip: "Enter bill to label",
		        client_name_tooltip: "Enter client name",
		        client_address_tooltip: "Enter client address",
		        client_city_zip_state_tooltip: "Enter client city, zip, country",
		        client_phone_fax_tooltip: "Enter client pnone & fax",
		        client_email_tooltip: "Enter client email",
		        client_other_tooltip: "Enter other client info",
		        invoice_title_tooltip: "Enter invoice title",
		        invoice_number_tooltip: "Enter invoice number",
		        item_row_number_label_tooltip: "",
		        item_description_label_tooltip: "Enter item header",
		        item_quantity_label_tooltip: "Enter quantity header",
		        item_price_label_tooltip: "Enter price header",
		        item_discount_label_tooltip: "Enter discount header",
		        item_tax_label_tooltip: "Enter tax header",
		        item_line_total_label_tooltip: "Enter line total header",
		        item_row_number_tooltip: "",
		        item_description_tooltip: "Enter item description",
		        item_quantity_tooltip: "Enter quantity",
		        item_price_tooltip: "Enter price",
		        item_discount_tooltip: "Enter discount",
		        item_tax_tooltip: "Enter tax",
		        item_line_total_tooltip: "",
		        amount_subtotal_label_tooltip: "Enter subtotal label",
		        amount_subtotal_tooltip: "",
		        tax_name_tooltip: "Enter tax label",
		        tax_value_tooltip: "",
		        amount_total_label_tooltip: "Enter total label",
		        amount_total_tooltip: "",
		        amount_paid_label_tooltip: "Enter amount paid label",
		        amount_paid_tooltip: "Enter amount paid",
		        amount_due_label_tooltip: "Enter amount due label",
		        amount_due_tooltip: "",
		        terms_label_tooltip: "Enter terms and notes label",
		        terms_tooltip: "Enter invoice terms and notes"
		    },
		    de: {
		        long_name: "Deutsch",
		        long_name_en: "German",
		        change_lang: "Ändern sie die sprache auf Deutsch",
		        print: "Drucken",
		        invoice: "Rechnung",
		        print_info: "Dieser befehl wird auch zu speichern<br/>die rechnung als PDF verwendet. Siehe FAQ für weitere informationen.",
		        highlight: "Markieren",
		        highlight_info: "Markieren sie editierbaren felder",
		        open_data: "Öffnen",
		        open_data_info: "Öffnen sie bereits gespeicherte daten.<br>Die datei muss von demselben speicherort<br>wie template.html geladen werden",
		        text_format_alert: "Bitte laden sie die textdatei hoch. Das unterstützte format ist .txt",
		        save_state: "Sicherer Staat",
		        save_online: "Speichern Online",
		        save_info: "Speichern des aktuellen rechnungsdaten wie<br/>firmenadresse, logo usw. Für zukünftige nutzung",
		        online: "Online",
		        online_info: "Sie werden auf Invoicebus website<br>genommen werden, um diese rechnung online zu speichern",
		        account_info: "Sie müssen Invoicebus konto diese rechnung zu sparen",
		        about: "Über",
		        faq: "FAQ",
		        got_it: "OK, habe es",
		        crafted_by: "Mit &#x2764; hergestellt von",
		        invoicebus_mechanics: "Die Invoicebus Mechanik",
		        add_new_row: "In neue zeile",
		        configure_columns: "Spalten konfigurieren",
		        row_number: "Zeilennummer",
		        description: "Artikel",
		        quantity: "Menge",
		        price: "Preis",
		        discount: "Rabatt",
		        tax: "Steuer",
		        line_total: "Gesamt",
		        insert_row: "Zeile einfügen",
		        remove_row: "Entfernen reihe",
		        drag_to_reorder: "Ziehen zum neuanordnen",
		        logo_upload_tooltip: "Drop-bild oder klicken sie ihr logo (max 2 MB) hochladen.<br>Für eine bessere druckauflösung größeres bild zu verwenden,<br>wie es automatisch verkleinert wird.",
		        drop_logo: "Lassen sie ihr logo hier",
		        remove_logo: "Logo entfernen",
		        image_format_alert: "Bitte laden sie die bilddatei hoch. Unterstützte formate sind .png, .jpg und .gif",
		        image_too_big_alert: "Datei zu groß, maximale größe 2mb",
		        currency_left: "Zeigen währung auf der linken seite",
		        currency_right: "Zeigen währung auf der rechten seite",
		        company_name_tooltip: "Geben sie den namen ihres unternehmens",
		        company_address_tooltip: "Geben sie firmenadresse",
		        company_city_zip_state_tooltip: "Geben sie unternehmens zip, stadt und land",
		        company_phone_fax_tooltip: "Geben sie unternehmens vertrag handys",
		        company_email_web_tooltip: "Geben sie unternehmens web-adresse und e-mail-adresse",
		        payment_info1_tooltip: "Geben sie ihre zahlungsdaten",
		        payment_info2_tooltip: "Geben sie eine andere zahlungsdetails",
		        payment_info3_tooltip: "Geben sie eine andere zahlungsdetails",
		        payment_info4_tooltip: "Geben sie eine andere zahlungsdetails",
		        payment_info5_tooltip: "Geben sie eine andere zahlungsdetails",
		        issue_date_label_tooltip: "Geben sie ausgabetag label",
		        issue_date_tooltip: "Wählen sie rechnungs ausgabetag",
		        net_term_label_tooltip: "Geben sie net tage label",
		        net_term_tooltip: "Geben sie rechnung netto tage",
		        due_date_label_tooltip: "Geben sie rechnung fälligkeit etikett",
		        due_date_tooltip: "Wählen sie rechnungsfälligkeitsdatum",
		        currency_label_tooltip: "Geben sie rechnungswährung etikett",
		        currency_tooltip: "Geben sie rechnungswährung",
		        po_number_label_tooltip: "Geben sie P.O. etikette",
		        po_number_tooltip: "Geben sie P.O. nummer",
		        bill_to_label_tooltip: "Geben sie rechnung zu beschriften",
		        client_name_tooltip: "Geben sie client-namen",
		        client_address_tooltip: "Geben sie client-adresse",
		        client_city_zip_state_tooltip: "Geben sie client ort, plz, land",
		        client_phone_fax_tooltip: "Geben sie client-telefon und fax",
		        client_email_tooltip: "Geben sie client-e-mail",
		        client_other_tooltip: "Geben sie anderen client-info",
		        invoice_title_tooltip: "Geben sie rechnung titel",
		        invoice_number_tooltip: "Geben sie die rechnungsnummer",
		        item_row_number_label_tooltip: "",
		        item_description_label_tooltip: "Geben sie artikel kopf",
		        item_quantity_label_tooltip: "Geben sie die menge kopf",
		        item_price_label_tooltip: "Geben sie preiskopf",
		        item_discount_label_tooltip: "Geben sie rabatt kopf",
		        item_tax_label_tooltip: "Geben sie faxkopf",
		        item_line_total_label_tooltip: "Geben sie zeilensumme kopf",
		        item_row_number_tooltip: "",
		        item_description_tooltip: "Geben sie artikelbeschreibung",
		        item_quantity_tooltip: "Geben sie die menge",
		        item_price_tooltip: "Geben sie preis",
		        item_discount_tooltip: "Geben sie rabatt",
		        item_tax_tooltip: "Geben sie den steuer",
		        item_line_total_tooltip: "",
		        amount_subtotal_label_tooltip: "Geben sie wert ihrer label",
		        amount_subtotal_tooltip: "",
		        tax_name_tooltip: "Geben sie steuerbanderole",
		        tax_value_tooltip: "",
		        amount_total_label_tooltip: "Geben sie die gesamt label",
		        amount_total_tooltip: "",
		        amount_paid_label_tooltip: "Geben sie den betrag bezahlt label",
		        amount_paid_tooltip: "Geben sie den betrag bezahlt",
		        amount_due_label_tooltip: "Geben sie den betrag aufgrund label",
		        amount_due_tooltip: "",
		        terms_label_tooltip: "Geben sie begriffe und hinweise label",
		        terms_tooltip: "Geben sie rechnungskonditionen und notizen"
		    },
		    es: {
		        long_name: "Español",
		        long_name_en: "Spanish",
		        change_lang: "Cambiar el idioma a Español",
		        print: "Impresión",
		        invoice: "Factura",
		        print_info: "Este comando tambien se utiliza para guardar<br/>la factura en PDF. Ve FAQ para mas informacion.",
		        highlight: "Destaca",
		        highlight_info: "Destaca los campos modificables",
		        open_data: "Abierto",
		        open_data_info: "Abrir datos ya guardados.<br>El archivo debe ser cargado desde la<br>misma ubicación que template.html",
		        text_format_alert: "Por favor, sube archivo de texto. Formato soportado es .txt",
		        save_state: "Guardar Estado",
		        save_online: "Guardar Online",
		        save_info: "Guarda los datos de la factura actuales como<br/>direccion de la empresa, logotipo, etc., por una reutilizacion futura",
		        online: "Online",
		        online_info: "Seras llevado a la pagina Invoicebus web<br>para guardar esta factura online",
		        account_info: "Necesitas una cuenta Invoicebus para guardar esta factura",
		        about: "Sobre",
		        faq: "FAQ",
		        got_it: "OK, entendido",
		        crafted_by: "Creado con &#x2764; de",
		        invoicebus_mechanics: "The Invoicebus Mechanics",
		        add_new_row: "Anade nueva fila",
		        configure_columns: "Configura columnas",
		        row_number: "Numero de fila",
		        description: "Artículo",
		        quantity: "Cantidad",
		        price: "Precio",
		        discount: "Descuento",
		        tax: "Impuestas",
		        line_total: "Total",
		        insert_row: "Introduce fila",
		        remove_row: "Elimina fila",
		        drag_to_reorder: "Arrastre para reordenar",
		        logo_upload_tooltip: "Caiga imagen o haga clic para cargar tu logotipo (max 2MB).<br>Para obtener la mejor resolucion de impresion utiliza la imagen grande,<br>como se reducen de forma automatica.",
		        drop_logo: "Arrastre tu logotipo aqui",
		        remove_logo: "Elimina tu logotipo",
		        image_format_alert: "Por favor, cargar el archivo de imagen. Los formatos soportados son .png, .jpg .gif ang",
		        image_too_big_alert: "El archivo es demasiado grande, el tamaño máximo es de 2MB",
		        currency_left: "Mostra moneda a la izquierda",
		        currency_right: "Mostra moneda a la derecha",
		        company_name_tooltip: "Rellena con el nombre de la empresa",
		        company_address_tooltip: "Rellena con la direccion de la empresa",
		        company_city_zip_state_tooltip: "Rellena con el codigo postal, la ciudad y el pais de la empresa",
		        company_phone_fax_tooltip: "Rellena con el telefono de contacto de la empresa",
		        company_email_web_tooltip: "Rellena con el e-mail y la pagina web de la empresa",
		        payment_info1_tooltip: "Rellena con tus detalles de pago",
		        payment_info2_tooltip: "Rellena con tus detalles de pago",
		        payment_info3_tooltip: "Rellena con tus detalles de pago",
		        payment_info4_tooltip: "Rellena con tus detalles de pago",
		        payment_info5_tooltip: "Rellena con tus detalles de pago",
		        issue_date_label_tooltip: "Introduce la fecha de emision",
		        issue_date_tooltip: "Selecciona fecha de emision de la factura",
		        net_term_label_tooltip: "Introduce la etiqueta con el dia net",
		        net_term_tooltip: "Introduce los dias net de la fecha de la factura",
		        due_date_label_tooltip: "Introduce la etiqueta de la fecha de vencimiento de la factura",
		        due_date_tooltip: "Selecciona la fecha de vencimiento de la factura",
		        currency_label_tooltip: "Introduce la etiqueta moneda de facturacion",
		        currency_tooltip: "Introduce la moneda de factura",
		        po_number_label_tooltip: "Introduce P.O. numero",
		        po_number_tooltip: "Introduce P.O. numero",
		        bill_to_label_tooltip: "Introduce una cuenta para etiquetar",
		        client_name_tooltip: "Introduce el nombre del cliente",
		        client_address_tooltip: "Introduce la direccion del cliente",
		        client_city_zip_state_tooltip: "Introduce el codigo postas, la ciudad y el pais del cliente",
		        client_phone_fax_tooltip: "Introduce el telefono y el fax del cliente",
		        client_email_tooltip: "Introduce el e-mail del cliente",
		        client_other_tooltip: "Introduce otras informaciones del cliente",
		        invoice_title_tooltip: "Introduce el nombre de la factura",
		        invoice_number_tooltip: "Introduce el numero de la factura",
		        item_row_number_label_tooltip: "",
		        item_description_label_tooltip: "Introduce el encabezado de la seccion",
		        item_quantity_label_tooltip: "Introduce el encabezado de la cantidad",
		        item_price_label_tooltip: "Introduce el encabezado del precio",
		        item_discount_label_tooltip: "Introduce el encabezado del descuento",
		        item_tax_label_tooltip: "Introduce el encabezado de las impuestas",
		        item_line_total_label_tooltip: "Introduce el encabezado de los totales de linea",
		        item_row_number_tooltip: "",
		        item_description_tooltip: "Introduce descripcion de la seccion",
		        item_quantity_tooltip: "Introduce cantidad",
		        item_price_tooltip: "Introduce precio",
		        item_discount_tooltip: "Introduce descuento",
		        item_tax_tooltip: "Introduce impuestas",
		        item_line_total_tooltip: "",
		        amount_subtotal_label_tooltip: "Introduce etiqueta de subtotales",
		        amount_subtotal_tooltip: "",
		        tax_name_tooltip: "Introduce etiqueta de impuestos",
		        tax_value_tooltip: "",
		        amount_total_label_tooltip: "Introduce etiqueta de totales",
		        amount_total_tooltip: "",
		        amount_paid_label_tooltip: "Introduce etiqueta de cantidad pagada",
		        amount_paid_tooltip: "Introduce cantidad pagada",
		        amount_due_label_tooltip: "Introduce etiqueta de cantidad debida",
		        amount_due_tooltip: "",
		        terms_label_tooltip: "Introduce etiqueta de condiciones y notas",
		        terms_tooltip: "Introduce condiciones y notas de la factura"
		    },
		    it: {
		        long_name: "Italiano",
		        long_name_en: "Italian",
		        change_lang: "Cambiare la lingua di Italiano",
		        print: "Stampare",
		        invoice: "Fattura",
		        print_info: "Questo comando e anche usato per salvare<br/>la fattura come PDF. Vedi FAQ per piu informazioni.",
		        highlight: "Evidenzia",
		        highlight_info: "Seleziona i campi modificabili",
		        open_data: "Aperto",
		        open_data_info: "Aprire i dati già salvati.<br>Il file deve essere caricato dalla<br>stessa posizione come template.html",
		        text_format_alert: "Si prega di caricare file di testo. formato supportato è .txt",
		        save_state: "Salva Stato Della",
		        save_online: "Salva Online",
		        save_info: "Salva i dati di fattura attuali come<br/>indirizzo dell'azienda, logo, ecc., per un riutilizzo futuro",
		        online: "Online",
		        online_info: "Sarai portato alla pagina web di Invoicebus<br>per salvare questa fattura online",
		        account_info: "Hai bisogno di un account Invoicebus per salvare questa fattura",
		        about: "Attorno",
		        faq: "FAQ",
		        got_it: "OK, capito",
		        crafted_by: "Realizzato con &#x2764; di",
		        invoicebus_mechanics: "The Invoicebus Mechanics",
		        add_new_row: "Aggiungi nova riga",
		        configure_columns: "Configure colonne",
		        row_number: "Numero di riga",
		        description: "Articolo",
		        quantity: "Quantità",
		        price: "Prezzo",
		        discount: "Sconto",
		        tax: "Tasse",
		        line_total: "Totale",
		        insert_row: "Inserisci riga",
		        remove_row: "Rimuovi riga",
		        drag_to_reorder: "Trascinare per riordinare",
		        logo_upload_tooltip: "Rilascia immagine o clicca per caricare il tuo logo (max 2MB).<br>Per migliore risoluzione di stampa usa immagine grande,<br>com'e scalato automaticamente.",
		        drop_logo: "Rilascia il tuo logo qui",
		        remove_logo: "Rimuovere logo",
		        image_format_alert: "Si prega di caricare file di immagine. I formati supportati sono .png, .jpg ang .gif",
		        image_too_big_alert: "File troppo grande, la dimensione massima è di 2MB",
		        currency_left: "Mostra la valuta alla sinistra",
		        currency_right: "Mostra la valuta alla destra",
		        company_name_tooltip: "Inserisci il nome della tua azienda",
		        company_address_tooltip: "Inserisci l'indirizzo della tua azienda",
		        company_city_zip_state_tooltip: "Inserisci il cap, la citta e il Paese dove si trova l'azienda",
		        company_phone_fax_tooltip: "Inserisci i telefoni di contatto dell'azienda",
		        company_email_web_tooltip: "Inserisci l'e-mail e la pagina web dell'azienda",
		        payment_info1_tooltip: "Inserisci i tuoi dettagli di pagamento",
		        payment_info2_tooltip: "Inserisci i tuoi dettagli di pagamento",
		        payment_info3_tooltip: "Inserisci i tuoi dettagli di pagamento",
		        payment_info4_tooltip: "Inserisci i tuoi dettagli di pagamento",
		        payment_info5_tooltip: "Inserisci i tuoi dettagli di pagamento",
		        issue_date_label_tooltip: "Inserisci la data di emissione",
		        issue_date_tooltip: "Seleziona la datta di emissione della fattura",
		        net_term_label_tooltip: "Inserisci l'etichetta con i giorni net (da)",
		        net_term_tooltip: "Inserisci i giorni dalla data della fattura",
		        due_date_label_tooltip: "Inserisci l'etichetta sulla data di scadenza della fattura",
		        due_date_tooltip: "Seleziona data di scadenza della fattura",
		        currency_label_tooltip: "Inserisci l'etichetta della valuta della fattura",
		        currency_tooltip: "Inserisci la valuta della fattura",
		        po_number_label_tooltip: "Inserisci P.O. etichetta",
		        po_number_tooltip: "Inserisci P.O. Numero",
		        bill_to_label_tooltip: "Inserisci bolletta da etichettare",
		        client_name_tooltip: "Inserisci il nome del cliente",
		        client_address_tooltip: "Inserisci l'indirizzo del cliente",
		        client_city_zip_state_tooltip: "Inserisci il cap, la citta e il Paese del cliente",
		        client_phone_fax_tooltip: "Inserisci il telefono e il fax del cliente",
		        client_email_tooltip: "Inserisci l'e-mail del cliente",
		        client_other_tooltip: "Inserisci altre informazioni del cliente",
		        invoice_title_tooltip: "Inserisci il nome della fattura",
		        invoice_number_tooltip: "Inserisci il numero della fattura",
		        item_row_number_label_tooltip: "",
		        item_description_label_tooltip: "Inserisci l'intestazione della voce",
		        item_quantity_label_tooltip: "Inserisci intestazione della quantita",
		        item_price_label_tooltip: "Inserisci intestazione del prezzo",
		        item_discount_label_tooltip: "Inserisci intestazione dello sconto",
		        item_tax_label_tooltip: "Inserisci intestazione delle tasse",
		        item_line_total_label_tooltip: "Inserisci intestazione del totale di linea",
		        item_row_number_tooltip: "",
		        item_description_tooltip: "Inserisci descrizione della voce",
		        item_quantity_tooltip: "Inserisci quantita",
		        item_price_tooltip: "Inserisci prezzo",
		        item_discount_tooltip: "Inserisci sconto",
		        item_tax_tooltip: "Inserisci tasse",
		        item_line_total_tooltip: "",
		        amount_subtotal_label_tooltip: "Inserisci etichetta di subtotali",
		        amount_subtotal_tooltip: "",
		        tax_name_tooltip: "Inserisci etichetta di tasse",
		        tax_value_tooltip: "",
		        amount_total_label_tooltip: "Inserisci etichetta di totali",
		        amount_total_tooltip: "",
		        amount_paid_label_tooltip: "Inserisci etichetta dell'importo pagato",
		        amount_paid_tooltip: "Inserisci importo pagato",
		        amount_due_label_tooltip: "Inserisci etichetta dell'importo dovuto",
		        amount_due_tooltip: "",
		        terms_label_tooltip: "Inserisci etichetta di condizioni e note",
		        terms_tooltip: "Inserisci condizioni e note della fattura"
		    },
		    fr: {
		        long_name: "Français",
		        long_name_en: "French",
		        change_lang: "Changer la langue Française",
		        print: "Imprimer",
		        invoice: "Facture",
		        print_info: "Cette commande est aussi utilisée pour sauvegarder<br/>la facture sous forme PDF. Consultez FAQ pour plus d'infos.",
		        highlight: "Marque",
		        highlight_info: "Mettre en relief les champs modifiables",
		        open_data: "Ouvrir",
		        open_data_info: "Ouvrez les données déjà enregistrées.<br>Le fichier doit être chargé à partir<br>du même emplacement que template.html",
		        text_format_alert: "S'il vous plaît télécharger le fichier texte. Format pris en charge est .txt",
		        save_state: "Enregistrer L'état",
		        save_online: "Enregistrer en Ligne",
		        save_info: "Enregistrer les données actuelles de la facture telles que<br/>adresse de l'entreprise, logo, etc., pour un futur réemploi",
		        online: "En ligne",
		        online_info: "Vous serez réorienté vers le site de Invoicebus website<br>sauvegarder cette facture en ligne",
		        account_info: "Vous avez besoin d'un compte Invoicebus pour sauvegarder cette facture",
		        about: "Pour",
		        faq: "FAQ",
		        got_it: "OK, compris",
		        crafted_by: "Conçu avec &#x2764; par",
		        invoicebus_mechanics: "La Mécanique Invoicebus",
		        add_new_row: "Ajouter ligne",
		        configure_columns: "Configurer colonnes",
		        row_number: "Numéro de ligne",
		        description: "Article",
		        quantity: "Quantité",
		        price: "Prix",
		        discount: "Réduction",
		        tax: "Taxe",
		        line_total: "Total",
		        insert_row: "Insérer ligne",
		        remove_row: "Supprimer ligne",
		        drag_to_reorder: "Tirer pour réorganiser",
		        logo_upload_tooltip: "Laisser tomber l'image ou cliquer pour télécharger votre logo (max 2MB).<br>Pour une meilleure résolution d'impression utiliser un image plus large,<br>comme c'est automatiquement réduit.",
		        drop_logo: "Laisser tomber votre logo ici",
		        remove_logo: "Supprimer logo",
		        image_format_alert: "S'il vous plaît télécharger le fichier d'image. Les formats supportés sont .png, .jpg ang .gif",
		        image_too_big_alert: "Fichier trop grand, la taille maximale est de 2MB",
		        currency_left: "Montrer la monnaie à gauche",
		        currency_right: "Montrer la monnaie à droite",
		        company_name_tooltip: "Entrer le nom de votre entreprise",
		        company_address_tooltip: "Entrer l'adresse de votre entreprise",
		        company_city_zip_state_tooltip: "Entrer le code postale, la ville et le pays de votre entreprise",
		        company_phone_fax_tooltip: "Entrer les numéros de téléphone de votre entreprise",
		        company_email_web_tooltip: "Entrer le site internet et le courriel de votre entreprise",
		        payment_info1_tooltip: "Entrer les détails de votre paiement",
		        payment_info2_tooltip: "Entrer d'autres détails de paiement",
		        payment_info3_tooltip: "Entrer d'autres détails de paiement",
		        payment_info4_tooltip: "Entrer d'autres détails de paiement",
		        payment_info5_tooltip: "Entrer d'autres détails de paiement",
		        issue_date_label_tooltip: "Entrer l'étiquette de la date de délivrance",
		        issue_date_tooltip: "Sélectionner la date de délivrance de la facture",
		        net_term_label_tooltip: "Entrer l'étiquette des jours nets",
		        net_term_tooltip: "Entrer la facture des jours nets",
		        due_date_label_tooltip: "Entrer l'étiquette de la date limite de la facture",
		        due_date_tooltip: "Sélectionner la date limite de la facture",
		        currency_label_tooltip: "Entrer l'étiquette de la monnaie de la facture",
		        currency_tooltip: "Entrer la monnaie de la facture",
		        po_number_label_tooltip: "Entrer l'étiquette de l'ordre d'achat",
		        po_number_tooltip: "Entrer le nombre de l'ordre d'achat",
		        bill_to_label_tooltip: "Enter l'étiquette de la facture",
		        client_name_tooltip: "Entrer le nom du client ",
		        client_address_tooltip: "Enter l'adresse du client ",
		        client_city_zip_state_tooltip: "Enter la ville,le code postal et le pays du client",
		        client_phone_fax_tooltip: "Entrer le numéro de téléphone et de fax du client",
		        client_email_tooltip: "Entrer le courrier du client",
		        client_other_tooltip: "Entrer d'autres infos sur le client info",
		        invoice_title_tooltip: "Entrer le titre de facture",
		        invoice_number_tooltip: "Entrer le numéro de facture",
		        item_row_number_label_tooltip: "",
		        item_description_label_tooltip: "Entrer l'en-tête de l'article",
		        item_quantity_label_tooltip: "Entrer l'en-tête de la quantité",
		        item_price_label_tooltip: "Entrerl'en-tête du prix",
		        item_discount_label_tooltip: "Entrer l'en-tête de la réduction",
		        item_tax_label_tooltip: "Entrer l'en-tête de la taxe",
		        item_line_total_label_tooltip: "Entrer l'en-tête du total de la ligne",
		        item_row_number_tooltip: "",
		        item_description_tooltip: "Entrer la description de l'article",
		        item_quantity_tooltip: "Entrer la quantité",
		        item_price_tooltip: "Entrer le  prix",
		        item_discount_tooltip: "Entrer la réduction",
		        item_tax_tooltip: "Entrer la taxe",
		        item_line_total_tooltip: "",
		        amount_subtotal_label_tooltip: "Entrer l'étiquette du total partiel",
		        amount_subtotal_tooltip: "",
		        tax_name_tooltip: "Entrer l'étiquette de la taxe",
		        tax_value_tooltip: "",
		        amount_total_label_tooltip: "Entrer l'étiquette du total ",
		        amount_total_tooltip: "",
		        amount_paid_label_tooltip: "Entrer l'étiquette du montant payé",
		        amount_paid_tooltip: "Entrer le montant payé",
		        amount_due_label_tooltip: "Entrer l'étiquette du montant dû",
		        amount_due_tooltip: "",
		        terms_label_tooltip: "Entrer l'étiquette des termes et des notes ",
		        terms_tooltip: "Entrer les termes et les notes de la facture"
		    }
		},
		G = function () {
		    var a = "";
		    a += '<select class="ib_pull_right ib_lang_select">', a += '<option value="" selected="selected" title="These are the data and language saved in your \'data.txt\' file">Default</option>', a += '<option value="" disabled="disabled">------------</option>';
		    for (var b in F) a += '<option value="' + b + '" title="' + F[b].change_lang + '">' + F[b].long_name + "</option>";
		    return a += "</select>"
		},
		H = function () {
		    $("head").prepend('<link rel="stylesheet" href="' + i + "generator" + h + '.css" media="all" />'), $(document.body).before($('<ib-span class="ib_invoice_commands_wrap"><ib-span class="ib_invoice_commands"><ib-span id="ib-print-btn" class="ib_default_button" data-tooltip="tooltip" data-placement="bottom" title="' + F[Ib].print_info + '"><i class="fa fa-print"></i><span class="ib_hide_xsmall"> ' + F[Ib].print + '</span></ib-span><ib-span class="ib_default_button ib_highlight_editable" data-tooltip="tooltip" data-placement="bottom" title="' + F[Ib].highlight_info + '"><i class="fa fa-edit"></i><span class="ib_hide_xsmall"> ' + F[Ib].highlight + '</span></ib-span><ib-span class="ib_default_button ib_open_data" data-tooltip="tooltip" data-placement="bottom" title="' + F[Ib].open_data_info + '"><i class="fa fa-fw"></i><span class="ib_hide_xsmall"> ' + F[Ib].open_data + '</span><input type="file" accept=".txt,text/plain" class="ib_load_saved_data"></ib-span><ib-span id="ib-save-data-btn" class="ib_default_button" data-toggle="modal" data-target="#ib_saveCurrentStateModal" data-tooltip="tooltip" data-placement="bottom" title="' + F[Ib].save_info + '"><i class="fa fa-bolt"></i><span class="ib_hide_xsmall"> ' + F[Ib].save_state + '</span></ib-span><iframe id="ib_download_data_frame" class="ib_force_hide"></iframe><ib-span class="ib_default_button ib_save_online" data-tooltip="tooltip" data-placement="bottom" title="' + F[Ib].online_info + '"><i class="fa fa-cloud-upload"></i><span class="ib_hide_xsmall"> ' + F[Ib].save_online + '</span></ib-span><ib-span class="ib_save_info" data-tooltip="tooltip" data-placement="right" title="' + F[Ib].account_info + '"><i class="fa fa-question-circle"></i></ib-span><ib-span class="ib_clear_xsmall"></ib-span><ib-span class="ib_gray_link ib_how_to_link ib_pull_right" data-toggle="modal" data-target="#ib_howToModal">' + F[Ib].about + '</ib-span><ib-span class="ib_top_separator ib_pull_right">●</ib-span><ib-span class="ib_gray_link ib_how_to_link ib_pull_right" onclick="window.open(\'https://groups.google.com/d/forum/html-invoice-generator\', \'_blank\')">' + F[Ib].faq + '</ib-span><ib-span class="ib_top_separator ib_pull_right">●</ib-span>' + G() + "</ib-span></ib-span>")).after($('<ib-span class="ib_invoicebus_love">' + F[Ib].crafted_by + "<br><ib-span onclick=\"window.open('https://invoicebus.com/team/', '_blank')\">" + F[Ib].invoicebus_mechanics + "</ib-span></ib-span>")), $("#ib-print-btn").click(function () {
		        D = !1, E(), window.print()
		    }), $(".ib_highlight_editable").click(function () {
		        D = !D, E()
		    }), $("input.ib_load_saved_data").change(function () {
		        var a = $(this).prop("files")[0];
		        if (a)
		            if ("text/plain" != a.type) alert(F[Ib].text_format_alert);
		            else {
		                var b = window.location.href;
		                b.indexOf("data=") > -1 ? b = b.replace(/(data=)[^\&]+/, "$1" + a.name) : b += b.indexOf("?") > -1 ? "&data=" + a.name : "?data=" + a.name, a.name || (b = window.location.origin + window.location.pathname), window.location = b
		            }
		    }), $(".ib_lang_select").val(Jb), $(".ib_lang_select").change(function () {
		        var a = $(this).val(),
					b = window.location.href;
		        b.indexOf("lang=") > -1 ? b = b.replace(/lang=.{2}/, "lang=" + a) : b += b.indexOf("?") > -1 ? "&lang=" + a : "?lang=" + a, a || (b = window.location.origin + window.location.pathname), window.location = b
		    }), $(document).scroll(function () {
		        0 === document.body.scrollTop && 0 === document.documentElement.scrollTop ? $(".ib_invoice_commands_wrap").removeClass("ib_commands_shadow") : $(".ib_invoice_commands_wrap").hasClass("ib_commands_shadow") || $(".ib_invoice_commands_wrap").addClass("ib_commands_shadow")
		    }), $(document.body).after($("<ib-span class=\"ib_invoicebus_fineprint\">Receive online payments through your invoices at <ib-span onclick=\"window.open('https://invoicebus.com', '_blank')\">invoicebus.com</ib-span></ib-span>")), JSON.parse(a.invoicebus_fineprint) || $(".ib_invoicebus_fineprint").css("visibility", "hidden"), $(".ib_save_online").click(Eb), $('[data-iterate="item"]:last').after($('<ib-span class="ib_bottom_row_commands"><ib-span class="ib_blue_link ib_add_new_row_link">' + F[Ib].add_new_row + '</ib-span><ib-span class="ib_blue_link ib_show_hide_columns_link">' + F[Ib].configure_columns + "</ib-span></ib-span>")), $(".ib_add_new_row_link").click(function (a) {
		        mb(this, a)
		    }), $(".ib_show_hide_columns_link").after($('<ib-span class="ib_show_hide_columns"><ib-span><input type="checkbox" value="item_row_number" /><ib-span>' + F[Ib].row_number + '</ib-span></ib-span><ib-span><input type="checkbox" value="item_description" /><ib-span>' + F[Ib].description + '</ib-span></ib-span><ib-span><input type="checkbox" value="item_quantity" /><ib-span>' + F[Ib].quantity + '</ib-span></ib-span><ib-span><input type="checkbox" value="item_price" /><ib-span>' + F[Ib].price + '</ib-span></ib-span><ib-span><input type="checkbox" value="item_discount" /><ib-span>' + F[Ib].discount + '</ib-span></ib-span><ib-span><input type="checkbox" value="item_tax" /><ib-span>' + F[Ib].tax + '</ib-span></ib-span><ib-span><input type="checkbox" value="item_line_total" /><ib-span>' + F[Ib].line_total + "</ib-span></ib-span></ib-span>")), $(".ib_show_hide_columns_link, .ib_show_hide_columns").hover(function () {
		        $(".ib_show_hide_columns").css("display", "block")
		    }, function () {
		        $(".ib_show_hide_columns").hide()
		    }), $(".ib_show_hide_columns > ib-span > ib-span").click(function () {
		        var a = $(this).parent().find("input:checkbox");
		        a.prop("checked", !a.is(":checked")), a.change()
		    }), $(".ib_show_hide_columns > ib-span > input:checkbox").change(function () {
		        var a = $(this).val(),
					b = $(this).is(":checked");
		        "item_row_number" == a ? $('[data-ibcl-id="' + a + '_label"], [data-ibcl-id="' + a + '"]').toggleClass("ib_hide_column", !b) : ($('[data-ibcl-id="' + a + '_label"], [data-ibcl-id="' + a + '"]').toggle(b), $('[data-ibcl-id="' + a + '_label"], [data-ibcl-id="' + a + '"]').parent("td").toggle(b), $('[data-ibcl-id="' + a + '_label"]').hasClass("ibcl_ie_contenteditable") && $('[data-ibcl-id="' + a + '_label"]').parent().toggle(b), $('[data-ibcl-id="' + a + '"]').hasClass("ibcl_ie_contenteditable") && $('[data-ibcl-id="' + a + '"]').parent().toggle(b), gb())
		    });
		    for (var b = 0; b < a.default_columns.length; b++) $('input[type="checkbox"][value="' + a.default_columns[b] + '"]').prop("checked", !0);
		    $(".ib_show_hide_columns > ib-span > input:checkbox").change()
		},
		I = function () {
		    for (var a = document.getElementsByTagName("script"), b = 0; b < a.length; b++) {
		        var c = a[b].src;
		        if (c.indexOf("generator" + h + ".js?") > -1) return c.substring(c.indexOf("?") + 1)
		    }
		},
		J = 0,

		K = function () {
		    a = {
		        "{company_logo}": "",
		        "{company_name}": {
		            default_text: "Dino Store",
		            tooltip: "Enter your company name"
		        },
		        "{company_address}": {
		            default_text: "227 Cobblestone Road",
		            tooltip: "Enter company's address"
		        },
		        "{company_city_zip_state}": {
		            default_text: "30000 Bedrock, Cobblestone County",
		            tooltip: "Enter company's zip, city and country"
		        },
		        "{company_phone_fax}": {
		            default_text: "+555 7 789-1234",
		            tooltip: "Enter company's contact phones"
		        },
		        "{company_email_web}": {
		            default_text: "http://dinostore.bed | hello@dinostore.bed",
		            tooltip: "Enter company's web and email address"
		        },
		        "{payment_info1}": {
		            default_text: "Payment details:",
		            tooltip: "Enter your payment details"
		        },
		        "{payment_info2}": {
		            default_text: "ACC:123006705",
		            tooltip: "Enter other payment details"
		        },
		        "{payment_info3}": {
		            default_text: "IBAN:US100000060345",
		            tooltip: "Enter other payment details"
		        },
		        "{payment_info4}": {
		            default_text: "SWIFT:BOA447",
		            tooltip: "Enter other payment details"
		        },
		        "{payment_info5}": {
		            default_text: "",
		            tooltip: "Enter other payment details"
		        },
		        "{issue_date_label}": {
		            default_text: "Issue Date:",
		            tooltip: "Enter issue date label"
		        },
		        "{issue_date}": {
		            default_text: "",
		            tooltip: "Select invoice issue date"
		        },
		        "{net_term_label}": {
		            default_text: "Net:",
		            tooltip: "Enter net days label"
		        },
		        "{net_term}": {
		            default_text: 21,
		            tooltip: "Enter invoice net days"
		        },
		        "{due_date_label}": {
		            default_text: "Due Date:",
		            tooltip: "Enter invoice due date label"
		        },
		        "{due_date}": {
		            default_text: "",
		            tooltip: "Select invoice due date"
		        },
		        "{currency_label}": {
		            default_text: "Currency:",
		            tooltip: "Enter invoice currency label"
		        },
		        "{currency}": {
		            default_text: "USD",
		            tooltip: "Enter invoice currency"
		        },
		        "{po_number_label}": {
		            default_text: "P.O. #",
		            tooltip: "Enter P.O. label"
		        },
		        "{po_number}": {
		            default_text: "1/3-147",
		            tooltip: "Enter P.O. Number"
		        },
		        "{bill_to_label}": {
		            default_text: "Bill to:",
		            tooltip: "Enter bill to label"
		        },
		        "{client_name}": {
		            default_text: "Slate Rock and Gravel Company",
		            tooltip: "Enter client name"
		        },
		        "{client_address}": {
		            default_text: "222 Rocky Way",
		            tooltip: "Enter client address"
		        },
		        "{client_city_zip_state}": {
		            default_text: "30000 Bedrock, Cobblestone County",
		            tooltip: "Enter client city, zip, country"
		        },
		        "{client_phone_fax}": {
		            default_text: "+555 7 123-5555",
		            tooltip: "Enter client pnone & fax"
		        },
		        "{client_email}": {
		            default_text: "fred@slaterockgravel.bed",
		            tooltip: "Enter client email"
		        },
		        "{client_other}": {
		            default_text: "Attn: Fred Flintstone",
		            tooltip: "Enter other client info"
		        },
		        "{invoice_title}": {
		            default_text: "INVOICE",
		            tooltip: "Enter invoice title"
		        },
		        "{invoice_number}": {
		            default_text: "#1",
		            tooltip: "Enter invoice number"
		        },
		        "{item_row_number_label}": {
		            default_text: "",
		            tooltip: ""
		        },
		        "{item_description_label}": {
		            default_text: "Item",
		            tooltip: "Enter item header"
		        },
		        "{item_quantity_label}": {
		            default_text: "Quantity",
		            tooltip: "Enter quantity header"
		        },
		        "{item_price_label}": {
		            default_text: "Price",
		            tooltip: "Enter price header"
		        },
		        "{item_discount_label}": {
		            default_text: "Discount",
		            tooltip: "Enter discount header"
		        },
		        "{item_tax_label}": {
		            default_text: "Tax",
		            tooltip: "Enter tax header"
		        },
		        "{item_line_total_label}": {
		            default_text: "Linetotal",
		            tooltip: "Enter line total header"
		        },
		        "{item_row_number}": {
		            default_text: "",
		            tooltip: ""
		        },
		        "{item_description}": {
		            default_text: "",
		            tooltip: "Enter item description"
		        },
		        "{item_quantity}": {
		            default_text: "",
		            tooltip: "Enter quantity"
		        },
		        "{item_price}": {
		            default_text: "",
		            tooltip: "Enter price"
		        },
		        "{item_discount}": {
		            default_text: "",
		            tooltip: "Enter discount"
		        },
		        "{item_tax}": {
		            default_text: "",
		            tooltip: "Enter tax"
		        },
		        "{item_line_total}": {
		            default_text: "",
		            tooltip: ""
		        },
		        "{amount_subtotal_label}": {
		            default_text: "Subtotal:",
		            tooltip: "Enter subtotal label"
		        },
		        "{amount_subtotal}": {
		            default_text: "",
		            tooltip: ""
		        },
		        "{tax_name}": {
		            default_text: "Tax:",
		            tooltip: "Enter tax label"
		        },
		        "{tax_value}": {
		            default_text: "",
		            tooltip: ""
		        },
		        "{amount_total_label}": {
		            default_text: "Total:",
		            tooltip: "Enter total label"
		        },
		        "{amount_total}": {
		            default_text: "",
		            tooltip: ""
		        },
		        "{amount_paid_label}": {
		            default_text: "Paid:",
		            tooltip: "Enter amount paid label"
		        },
		        "{amount_paid}": {
		            default_text: "",
		            tooltip: "Enter amount paid"
		        },
		        "{amount_due_label}": {
		            default_text: "Amount Due:",
		            tooltip: "Enter amount due label"
		        },
		        "{amount_due}": {
		            default_text: "",
		            tooltip: ""
		        },
		        "{terms_label}": {
		            default_text: "Terms & Notes",
		            tooltip: "Enter terms and notes label"
		        },
		        "{terms}": {
		            default_text: "Fred, thank you very much. We really appreciate your business.<br />Please send payments before the due date.",
		            tooltip: "Enter invoice terms and notes"
		        },
		        date_format: "mm/dd/yyyy",
		        currency_position: "left",
		        show_currency: !0,
		        number_format: "0,000.00",
		        default_columns: ["item_row_number", "item_description", "item_quantity", "item_price", "item_discount", "item_tax", "item_line_total"],
		        default_quantity: "1",
		        default_price: "0",
		        default_discount: "0",
		        default_tax: "0",
		        default_number_rows: 3,
		        auto_calculate_dates: !0,
		        load_items: !0,
		        invoicebus_fineprint: !0,
		        lang: Ib,
		        items: [{
		            item_description: "Frozen Brontosaurus Ribs",
		            item_quantity: "2",
		            item_price: "120",
		            item_discount: "",
		            item_tax: "2%"
		        }, {
		            item_description: "Mammoth Chops",
		            item_quantity: "14",
		            item_price: "175",
		            item_discount: "-10%",
		            item_tax: "5%"
		        }, {
		            item_description: "",
		            item_quantity: "",
		            item_price: "",
		            item_discount: "",
		            item_tax: ""
		        }]
		    }, L()
		},


		L = function () {
		    if (!(J > o)) {
		        if ("undefined" != typeof ib_invoice_data) {
		            "function" == typeof ib_invoice_data && (ib_invoice_data = ib_parseData(ib_multiline.stripIndent(ib_invoice_data)));
		            for (var b in ib_invoice_data) "undefined" == typeof a[b] && (a[b] = {
		                default_text: ib_invoice_data[b],
		                tooltip: "Enter " + b.replace(/{(document|client)_custom_([a-zA-Z0-9_]+)}/gi, "$1 $2").replace(/_/g, " ")
		            }), "undefined" != typeof a[b].default_text ? a[b].default_text = ib_invoice_data[b] : a[b] = ib_invoice_data[b];
		            ub = ib_invoice_data.currency_position || "left", vb = ib_invoice_data.show_currency || !0, wb = ib_invoice_data.number_format || "0,000.00", wb && (xb = wb[wb.length - 3], yb = wb[1], isNaN(parseInt(yb)) || (yb = "")), tb = $(sb).map(function (b, c) {
		                return c.code == a["{currency}"].default_text ? c.symbol : void 0
		            })[0], Ib = ib_invoice_data.lang || Jb || "en", Kb && (Ib = Jb || "en");
		            var c = document.createElement("script");
		            c.onload = function () {
		                var a = ib_multiline.stripIndent(ib_save_state_data),
							b = '<ib-div id="ib_saveCurrentStateModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="saveStateModal" aria-hidden="true"><ib-div class="modal-dialog"><ib-div class="modal-content"><ib-div class="modal-header"><ib-span type="button" class="close" data-dismiss="modal"><ib-span aria-hidden="true">&times;</ib-span></ib-span><ib-div class="modal-title" id="saveStateModal">' + F[Ib].save_state + '</ib-div></ib-div><ib-div class="modal-body"><ib-div class="ib_how_to_container">' + a + "</ib-div></ib-div></ib-div></ib-div></ib-div>";
		                $(document.body).after($(b)), $("#ib-save-data-btn").click(function () {
		                    if (z()) {
		                        var a = Fb();
		                        $("#ib-save-current-data").attr("href", "data:text/plain;charset=UTF-8," + encodeURIComponent(a)), $("#ib-safari-save-as").removeClass("ib_hide")
		                    }
		                }), $("#ib-save-current-data").click(function () {
		                    var a = Fb();
		                    if (y()) {
		                        var b = ib_download_data_frame.document || ib_download_data_frame.contentDocument || ib_download_data_frame.contentWindow.document;
		                        b.open("text/html", "replace"), b.write("<pre>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</pre>"), b.close(), ib_download_data_frame.focus(), b.execCommand("SaveAs", !0, "data.txt")
		                    } else $(this).attr("href", "data:text/plain;charset=UTF-8," + encodeURIComponent(a))
		                })
		            }, c.src = i + "docs/save-state/save-state-" + (Ib || "en") + ".js", document.body.appendChild(c), c = document.createElement("script"), c.onload = function () {
		                var a = ib_multiline.stripIndent(ib_how_to_data),
							b = '<ib-div id="ib_howToModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="howToModal" aria-hidden="true"><ib-div class="modal-dialog"><ib-div class="modal-content"><ib-div class="modal-header"><ib-span type="button" class="close" data-dismiss="modal"><ib-span aria-hidden="true">&times;</ib-span></ib-span><ib-div class="modal-title" id="howToModal">' + F[Ib].about + '</ib-div></ib-div><ib-div class="modal-body"><ib-div class="ib_how_to_container">' + a + '</ib-div></ib-div><ib-div class="modal-footer"><ib-span class="ib_default_button" data-dismiss="modal">' + F[Ib].got_it + "</ib-span></ib-div></ib-div></ib-div></ib-div>";
		                $(document.body).after($(b))
		            }, c.src = i + "docs/how-to/how-to-" + (Ib || "en") + ".js", document.body.appendChild(c);
		            for (b in a) "undefined" != typeof a[b].tooltip && (a[b].tooltip = F[Ib][b.substring(1, b.length - 1) + "_tooltip"])
		        } else setTimeout(function () {
		            L()
		        }, m);
		        J += m
		    }
		},

		M = function () {
		    N()
		},

		N = function () {
		    O("{company_name}"), O("{company_address}"), O("{company_city_zip_state}"), O("{company_phone_fax}"), O("{company_email_web}"), O("{payment_info1}"), O("{payment_info2}"), O("{payment_info3}"), O("{payment_info4}"), O("{issue_date_label}"), O("{issue_date}", !0, {
		        "data-date": eb
		    }), O("{net_term_label}"), O("{net_term}"), O("{due_date_label}"), O("{due_date}", !0, {
		        "data-date": fb
		    }), O("{currency_label}"), O("{currency}"), O("{po_number_label}"), O("{po_number}"), O("{bill_to_label}"), O("{payment_info5}"), O("{client_name}"), O("{client_address}"), O("{client_city_zip_state}"), O("{client_phone_fax}"), O("{client_email}"), O("{client_other}"), O("{invoice_title}"), O("{invoice_number}"), O("{item_row_number_label}", !0), O("{item_description_label}"), O("{item_quantity_label}"), O("{item_price_label}"), O("{item_discount_label}"), O("{item_tax_label}"), O("{item_line_total_label}"), O("{item_row_number}", !0), O("{item_description}"), O("{item_quantity}"), O("{item_price}"), O("{item_discount}"), O("{item_tax}"), O("{item_line_total}", !0), O("{amount_subtotal_label}"), O("{amount_subtotal}", !0), O("{tax_name}"), O("{tax_value}", !0), O("{amount_total_label}"), O("{amount_total}", !0), O("{amount_paid_label}"), O("{amount_paid}"), O("{amount_due_label}"), O("{amount_due}", !0), O("{terms_label}"), O("{terms}"), $("*").filter(function () {
		        var a = $(this);
		        return (/{document_custom_[a-zA-Z0-9_]+}/.test(a.text()) || /{client_custom_[a-zA-Z0-9_]+}/.test(a.text())) && 0 === a.children().length && 3 == a.prop("firstChild").nodeType
		    }).each(function (b, c) {
		        var d = $(c).text();
		        "undefined" == typeof a[d] && (a[d] = {
		            default_text: "",
		            tooltip: "Enter " + d.replace(/{(document|client)_custom_([a-zA-Z0-9_]+)}/gi, "$1 $2").replace(/_/g, " ")
		        }), O(d)
		    })
		},

		O = function (b, c, d) {
		    for (var e = b.substring(1, b.length - 1), f = "TABLE,COL,COLGROUP,TBODY,TD,TFOOT,TH,THEAD,TR".split(","), g = $('*:contains("' + b + '")'), h = 0; h < g.length; h++)
		        if (0 === $(g[h]).children().length && 3 == $(g[h]).prop("firstChild").nodeType) {
		            var i = $(g[h]);
		            if (y() && f.indexOf(i.prop("tagName")) > -1 && !c) {
		                var j = $('<ib-span class="ibcl_ie_contenteditable" contenteditable="true"></ib-span>');
		                i.html(j), i = j
		            }
		            i.attr("data-ibcl-id", e).addClass("ibcl_" + e).attr("data-tooltip", "tooltip").attr("data-placement", "top").attr("title", a[b].tooltip).html(a[b].default_text), d && i.attr(d), c || i.attr("contenteditable", "true")
		        }
		},

		P = function () {
		    $("[data-ibcl-id]").on("keydown keyup", function () {
		        var a = $(this).data("ibcl-id");
		        if (-1 == ["item_row_number", "item_description", "item_quantity", "item_price", "item_tax_percentage", "item_tax", "item_discount", "item_line_total"].indexOf(a)) {
		            var b = $(this).html();
		            $('[data-ibcl-id="' + a + '"]').each(function (a, c) {
		                $(c).html() !== b && $(c).html(b)
		            })
		        }
		    })
		},
		Q = 820,
		R = 820,
		S = 1,
		T = 0,
		U = 0,
		V = 820,
		W = 820,
		X = function () {
		    $('[data-logo="{company_logo}"]').attr("data-logo", "company_logo").attr("src", e)
		},
		Y = function () {
		    var b = $('[data-logo="company_logo"]').attr("src", e);
		    $(document).bind("drop dragover", function (a) {
		        a.stopPropagation(), a.preventDefault(), a.originalEvent.dataTransfer.dropEffect = "none"
		    }), b.after($('<ib-div class="ib_remove_logo_overlay" data-tooltip="tooltip" data-placement="top"><ib-span class="ib_remove_logo" title="' + F[Ib].remove_logo + '"><i class="fa fa-times-circle"></i></ib-span></ib-div>').hover(function () { }, function () {
		        $(".ib_remove_logo_overlay").hide()
		    })), b.hover(function () {
		        if ("" !== b.attr("src")) {
		            var a = $('[data-logo="company_logo"]').offset();
		            $(".ib_remove_logo_overlay").show().offset(a).width(T).height(U)
		        }
		    }, function () { }), setTimeout(function () {
		        T = $('[data-logo="company_logo"]').width(), U = $('[data-logo="company_logo"]').height(), S = T / U, T > U ? R *= 1 / S : Q *= S, b.hide().before($('<ib-span class="ib_drop_zone" data-tooltip="tooltip" data-placement="top" title="' + F[Ib].logo_upload_tooltip + '"><ib-span>' + F[Ib].drop_logo + "<br /><ib-span>(" + T + " x " + U + 'px)</ib-span><input type="file" accept="image/*" class="ib_drop_logo" /></ib-span></ib-span>').width(T).height(U)), $(".ib_drop_zone").bind("dragenter", g).bind("dragleave", h).bind("dragover", f).bind("drop", c), $("input.ib_drop_logo").change(function (a) {
		            a.originalEvent.dataTransfer = {
		                files: $(this).prop("files")
		            }, c(a)
		        }), setTimeout(function () {
		            a["{company_logo}"] && /^data:image\/.+;base64/.test(a["{company_logo}"]) && (b.attr("src", a["{company_logo}"]).css("display", "block").hide().show(), $(".ib_logo_base64").val($('[data-logo="company_logo"]').attr("src")), $(".ib_drop_zone").hide())
		        }, 100)
		    }, 100);
		    var c = function (a) {
		        a.stopPropagation(), a.preventDefault();
		        var c = a.originalEvent.dataTransfer.files,
                    d = c[0];
		        if (d) {
		            if (!d.type.match(/image.*/)) return void alert(F[Ib].image_format_alert);
		            if (d.size > 2097152) return void alert(F[Ib].image_too_big_alert);
		            var e = new Image,
                        f = new FileReader;
		            f.onload = function (a) {
		                e.src = a.target.result
		            }, e.onload = function () {
		                var a = e.width,
                            c = e.height;
		                V = Q, W = R, V >= a && a >= c && (W = 1 * a / S, V = a), W >= c && c >= a && (V = c * S, W = c), T >= a && a >= c && (W = 1 * T / S, V = T), U >= c && c >= a && (V = U * S, W = U), a >= V && (c *= V / a, a = V), c >= W && (a *= W / c, c = W), 1 > a && (a = 1), 1 > c && (c = 1);
		                var d = document.createElement("canvas");
		                d.width = V, d.height = W;
		                var f = (V - a) / 2,
                            g = d.getContext("2d");
		                g.drawImage(e, f, 0, a, c);
		                var h = d.toDataURL("image/png");
		                b.attr("src", h).css("display", "block").hide().fadeIn(), $(".ib_logo_base64").val($('[data-logo="company_logo"]').attr("src")), $(".ib_drop_zone").hide()
		            }, f.readAsDataURL(d), $(".ib_drop_zone").removeClass("ib_border_hover")
		        }
		    },
				d = function (a) {
				    a.preventDefault(), a.stopPropagation(), b.attr("src", e).hide(), $(".ib_drop_zone").show(), $(".ib_remove_logo_overlay").hide(), $("input.ib_drop_logo").val("")
				},
				f = function (a) {
				    a.stopPropagation(), a.preventDefault(), a.originalEvent.dataTransfer.dropEffect = "copy"
				},
				g = function (a) {
				    a.stopPropagation(), a.preventDefault(), $(".ib_drop_zone").addClass("ib_border_hover")
				},
				h = function (a) {
				    a.stopPropagation(), a.preventDefault(), $(".ib_drop_zone").removeClass("ib_border_hover")
				};
		    $(".ib_remove_logo").click(d)
		},
		Z = function () {
		    b = $('[data-iterate="item"]'), c = $('[data-iterate="tax"]').hide().clone();
		    var d = 1,
				e = parseInt(a.default_number_rows);
		    for ("undefined" != typeof ib_invoice_data && "undefined" != typeof ib_invoice_data.items && (a.items = ib_invoice_data.items), e < a.items.length && (e = a.items.length) ; e > d;) $(b).after($(b).clone()), d++;
		    hb(), b = b.clone(), kb(), jb(), gb()
		},
		_ = function (a, b) {
		    for (var c = 0; c < a.length; c++)
		        if (Object.keys(a[c])[0] == b) return c;
		    return -1
		},
		ab = function (a, b) {
		    for (var c = 0; c < a.length; c++)
		        if (tax_row = $(a[c]).find('[data-ib-value="' + b.getFormatedNumber() + '"]'), tax_row.length) return c;
		    return -1
		},
		bb = function (a) {
		    return a ? $('[data-iterate="tax"]:visible').find('[data-ib-value="' + a.toString().getFormatedNumber() + '"]').closest('[data-iterate="tax"]').find('[data-ibcl-id="tax_name"]').text().replace(/:/gi, "") : ""
		};
    String.prototype.insertString = function (a, b) {
        return this ? [this.slice(0, b), a, this.slice(b)].join("") : ""
    }, String.prototype.getNumber = function () {
        if (this) {
            if ("." == xb) return parseFloat(this.replace(/[^0-9.-]/g, ""));
            if ("," == xb) return parseFloat(this.replace(/[^0-9,-]/g, "").replace(/,/g, "."))
        }
        return 0
    }, String.prototype.toValidNumberString = function () {
        if (this) {
            if ("." == xb) return this.replace(/[^0-9.-]/g, "");
            if ("," == xb) return this.replace(/[^0-9,-]/g, "")
        }
        return ""
    }, String.prototype.getValidNumberChars = function () {
        return this ? this.replace(/[^0-9.,-]/gi, "") : ""
    }, String.prototype.getFormatedNumber = function () {
        if (this) {
            var a, b, c = this.toString(),
				d = "";
            0 === c.indexOf("-") && (c = c.substring(1), d = "-");
            var e = yb;
            for (" " == yb && (e = "&#8239;"), c = c.replace(/\./g, xb), b = 0, a = c.lastIndexOf(xb) - 1; a >= 0; a--) 2 > b ? b++ : (b = 0, c = c.insertString(e, a));
            return ("." == c[0] || "," == c[0]) && (c = c.substring(1)), d + c
        }
        return this
    }, Number.prototype.toFixed = function (a) {
        a || (a = 0);
        var b = (+(Math.round(+(this.toString() + "e" + a)).toString() + "e" + -a)).toString(); -1 == b.indexOf(".") && a > 0 && (b += ".");
        for (var c = 0, d = b.indexOf(".") + 1; d <= b.length; d++) void 0 === b[d] && a > c && (b += "0"), c++;
        return b
    };
    var cb, db, eb, fb, gb = function () {
        for (var b, d, e, f = $('[data-iterate="item"]'), g = 0, h = 0, i = 0, j = [], k = 0; k < f.length; k++) {
            var l = $(f[k]),
                m = l.find('[data-ibcl-id="item_quantity"]:visible').text().getNumber();
            "" === l.find('[data-ibcl-id="item_quantity"]:visible').text().trim() && (m = a.default_quantity.getNumber());
            var n = l.find('[data-ibcl-id="item_price"]:visible').text().getNumber() || a.default_price,
                o = l.find('[data-ibcl-id="item_discount"]:visible').text().getNumber() || a.default_discount.getNumber(),
                p = l.find('[data-ibcl-id="item_tax"]:visible').text().getNumber() || a.default_tax.getNumber();
            isNaN(parseFloat(l.find('[data-ibcl-id="item_tax"]:visible').text())) && (p = null), isNaN(l.find('[data-ibcl-id="item_price"]').text().getNumber()) ? l.find('[data-ibcl-id="item_price"]').removeClass("add_currency_left add_currency_right").find("br, p, div").remove() : (l.find('[data-ibcl-id="item_price"]').removeClass("add_currency_left add_currency_right").attr("data-currency", tb).data("currency", tb), JSON.parse(vb) && l.find('[data-ibcl-id="item_price"]').addClass("left" == ub ? "add_currency_left" : "add_currency_right")), isNaN(l.find('[data-ibcl-id="item_discount"]').text().getNumber()) ? l.find('[data-ibcl-id="item_discount"]').removeClass("ib_item_percentage").find("br, p, div").remove() : l.find('[data-ibcl-id="item_discount"]').addClass("ib_item_percentage").find("br, p, div").remove(), isNaN(l.find('[data-ibcl-id="item_tax"]').text().getNumber()) ? l.find('[data-ibcl-id="item_tax"]').removeClass("ib_item_percentage").find("br, p, div").remove() : l.find('[data-ibcl-id="item_tax"]').addClass("ib_item_percentage").find("br, p, div").remove();
            var q = l.find('[data-ibcl-id="item_line_total"]:visible');
            b = $('[data-ibcl-id="amount_paid"]').text().getNumber(), d = $('[data-ibcl-id="amount_due"]').text().getNumber();
            var r = 0,
                s = 0;
            if (isNaN(m) || isNaN(n) || (r = m * n), isNaN(o) || (r -= Math.abs(r * (o / 100))), g += r, isNaN(p) || (s = p / 100), i = r * s, h += i, null !== p) {
                var t = {};
                t[p] = i;
                var u = _(j, p);
                u > -1 ? j[u][p] += i : j.push(t)
            }
            q.html(r.toFixed(2).getFormatedNumber()).removeClass("add_currency_left add_currency_right").attr("data-currency", tb).data("currency", tb), JSON.parse(vb) && q.addClass("left" == ub ? "add_currency_left" : "add_currency_right")
        }
        var v, w, x = [];
        for (e = 0; e < j.length; e++) w = Object.keys(j[e])[0], v = $('[data-iterate="tax"]:visible').find('[data-ib-value="' + w.getFormatedNumber() + '"]').closest('[data-iterate="tax"]'), v.length && x.push($(v).clone());
        for ($('[data-iterate="tax"]:visible').remove(), e = 0; e < j.length; e++) {
            w = Object.keys(j[e])[0];
            var y = ab(x, w);
            if (y > -1) $('[data-iterate="tax"]:hidden').before(x[y]);
            else {
                v = c.clone().show();
                var z = v.find('[data-ibcl-id="tax_name"]'),
                    A = z.text().trim(),
                    B = A.lastIndexOf(":");
                (-1 == B || B != A.length - 1) && (B = A.length), z.html(A.substring(0, B) + " " + (e + 1) + A.substring(B, A.length)), v.find('[data-ibcl-id="tax_value"]').attr("data-ib-value", Object.keys(j[e])[0].getFormatedNumber()), $('[data-iterate="tax"]:hidden').before(v)
            }
        }
        for (e = 0; e < j.length; e++) w = Object.keys(j[e])[0], v = JSON.parse(vb) ? "left" == ub ? tb + j[e][w].toFixed(2).getFormatedNumber() : j[e][w].toFixed(2).getFormatedNumber() + tb : j[e][w].toFixed(2).getFormatedNumber(), $('[data-iterate="tax"]').find('[data-ib-value="' + w.getFormatedNumber() + '"]').html(v);
        var C = g + h;
        isNaN(b) && (b = 0, $('[data-ibcl-id="amount_paid"]').html(b.toFixed(2).getFormatedNumber())), $('[data-ibcl-id="amount_paid"]').removeClass("add_currency_left add_currency_right").attr("data-currency", tb).data("currency", tb), JSON.parse(vb) && $('[data-ibcl-id="amount_paid"]').addClass("left" == ub ? "add_currency_left" : "add_currency_right"), isNaN(d) && (d = 0), d = C - b, JSON.parse(vb) ? (g = "left" == ub ? tb + g.toFixed(2).getFormatedNumber() : g.toFixed(2).getFormatedNumber() + tb, C = "left" == ub ? tb + C.toFixed(2).getFormatedNumber() : C.toFixed(2).getFormatedNumber() + tb, d = "left" == ub ? tb + d.toFixed(2).getFormatedNumber() : d.toFixed(2).getFormatedNumber() + tb) : (g = g.toFixed(2).getFormatedNumber(), C = C.toFixed(2).getFormatedNumber(), d = d.toFixed(2).getFormatedNumber()), $('[data-ibcl-id="amount_subtotal"]').html(g), $('[data-ibcl-id="amount_total"]').html(C), $('[data-ibcl-id="amount_due"]').html(d), E()
    },
		hb = function () {
		    for (var a = $('[data-ibcl-id="item_row_number"]'), b = 0; b < a.length; b++) $(a[b]).append($('<ib-span data-row-number="item_row_number"></ib-span>'));
		    ib()
		},
		ib = function () {
		    for (var a = $('[data-row-number="item_row_number"]'), b = 0; b < a.length; b++) $(a[b]).html(b + 1)
		},
		jb = function () {
		    if (JSON.parse(a.load_items)) {
		        var b = $('[data-iterate="item"]');
		        "undefined" != typeof ib_invoice_data && "undefined" != typeof ib_invoice_data.items && (a.items = ib_invoice_data.items);
		        for (var c = 0; c < a.items.length; c++) $(b[c]).find('[data-ibcl-id="item_description"]').html(a.items[c].item_description), $(b[c]).find('[data-ibcl-id="item_quantity"]').html(a.items[c].item_quantity), $(b[c]).find('[data-ibcl-id="item_price"]').html(a.items[c].item_price), $(b[c]).find('[data-ibcl-id="item_discount"]').html(a.items[c].item_discount.replace(/%/g, "")), $(b[c]).find('[data-ibcl-id="item_tax"]').html(a.items[c].item_tax.replace(/%/g, ""))
		    }
		},
		kb = function () {
		    var a = '<ib-span class="ib_row_commands" style="height:' + $('[data-iterate="item"]').height() + 'px;"><ib-span class="ib_commands"><ib-span class="ib_add" title="' + F[Ib].insert_row + '"><i class="fa fa-plus"></i></ib-span><ib-span class="ib_delete" title="' + F[Ib].remove_row + '"><i class="fa fa-minus"></i></ib-span><ib-span class="ib_move" title="' + F[Ib].drag_to_reorder + '"><i class="fa fa-sort"></i></ib-span></ib-span></ib-span>';
		    $(".ib_row_commands").remove();
		    for (var b = $('[data-iterate="item"]'), c = 0; c < b.length; c++) $(b[c]).children(":first").css("position", "relative").prepend($(a));
		    $(".ib_add").click(function (a) {
		        mb(this, a)
		    }), $(".ib_delete").click(function (a) {
		        nb(this, a)
		    }), $('[data-iterate="item"]').hover(function () {
		        $(this).find(".ib_row_commands .ib_commands").css("display", "block")
		    }, function () {
		        $(this).find(".ib_row_commands .ib_commands").hide()
		    }), new ib_TableDnD(ib, Cb).init(), lb()
		},
		lb = function () {
		    function a(a) {
		        var b, c = String.fromCharCode(a.which);
		        if (0 === a.which || 8 === a.which || /[0-9.,\-]/.test(c)) {
		            switch ($(this).data("ibcl-id")) {
		                case "net_term":
		                    "." == c || "," == c || "-" == c || $(this).text().length >= 3 && a.which >= 48 && a.which <= 57 && window.getSelection().isCollapsed ? a.preventDefault() : ($('[data-ibcl-id="net_term"], [data-ibcl-id="due_date"]').removeClass("ib_stop_animate").addClass("ib_highlight_bg"), setTimeout(function () {
		                        $('[data-ibcl-id="net_term"], [data-ibcl-id="due_date"]').removeClass("ib_highlight_bg")
		                    }, 10));
		                    break;
		                case "item_quantity":
		                case "item_price":
		                case "item_discount":
		                case "amount_paid":
		                    if ("-" == c) {
		                        if (-1 == $(this).text().indexOf("-")) {
		                            b = window.getSelection().extentOffset + 1, $(this).text("-" + $(this).text().replace(/\-/g, ""));
		                            try {
		                                window.getSelection().collapse(this.firstChild, b)
		                            } catch (d) { }
		                        }
		                        a.preventDefault()
		                    }
		            }
		            "." == xb && -1 != $(this).text().indexOf(".") && "." == c && a.preventDefault(), "," == xb && -1 != $(this).text().indexOf(",") && "," == c && a.preventDefault(), "." == xb && "," == c && a.preventDefault(), "," == xb && "." == c && a.preventDefault()
		        } else a.preventDefault()
		    }
		    $('[data-ibcl-id="net_term"], [data-ibcl-id="item_quantity"], [data-ibcl-id="item_price"], [data-ibcl-id="item_discount"], [data-ibcl-id="item_tax"], [data-ibcl-id="amount_paid"], [data-ibcl-id="amount_due"]').keypress(a).on("keyup keydown", function () {
		        switch ($(this).data("ibcl-id")) {
		            case "net_term":
		                setTimeout(rb, 0);
		                break;
		            case "item_quantity":
		            case "item_price":
		            case "item_discount":
		                break;
		            case "amount_paid":
		                if ($(this).text().trim().replace(",", ".") != $(this).text().getNumber().toFixed(2)) {
		                    pos = window.getSelection().extentOffset + 1, $(this).text($(this).text().getNumber().toFixed(2).replace(".", xb));
		                    try {
		                        window.getSelection().collapse(this.firstChild, pos)
		                    } catch (a) { }
		                }
		        }
		        "-" == $(this).text().trim() && $(this).text(""), setTimeout(gb, 0)
		    })
		},
		mb = function (a, c) {
		    c.stopPropagation(), c.preventDefault(), $(a).hasClass("ib_add_new_row_link") ? $(a).closest(".ib_bottom_row_commands").before($(b).clone()) : $(a).closest('[data-iterate="item"]').before($(b).clone()), ib(), kb(), $(".ib_show_hide_columns > ib-span > input:checkbox").each(function (a) {
		        $(".ib_show_hide_columns > ib-span > input:checkbox:nth(" + a + ")").change()
		    }), E(), gb()
		},
		nb = function (a, b) {
		    b.stopPropagation(), b.preventDefault(), $(a).closest('[data-iterate="item"]').remove(), ib(), gb()
		},
		ob = function () {
		    cb = new Date, db = new Date((new Date).setDate((new Date).getDate() + parseInt(a["{net_term}"].default_text))), eb = pb(cb, a.date_format), fb = pb(db, a.date_format), a["{issue_date}"].default_text = eb, a["{due_date}"].default_text = fb
		},
		pb = function (a, b) {
		    var c = b.match(/[.\/\-\s].*?/),
				d = b.split(/\W+/);
		    if (!c || !d || 0 === d.length) throw new Error("Invalid date format.");
		    b = {
		        separator: c,
		        parts: d
		    };
		    var e = {
		        d: a.getDate(),
		        m: a.getMonth() + 1,
		        yy: a.getFullYear().toString().substring(2),
		        yyyy: a.getFullYear()
		    };
		    e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, a = [];
		    for (var f = 0; f < b.parts.length; f++) a.push(e[b.parts[f]]);
		    return a.join(b.separator)
		},
		qb = function () {
		    for (var b = "", c = ["dd/mm/yyyy", "dd-mm-yyyy", "dd.mm.yyyy", "mm/dd/yyyy", "mm-dd-yyyy", "mm.dd.yyyy", "yyyy mm dd", "yyyy-mm-dd", "yyyy.mm.dd"], d = 0; d < c.length; d++) b += '<ib-div><input type="radio" id="ib_date_format_radio' + d + '" name="ib_date_format_choice" value="' + c[d] + '"><label for="ib_date_format_radio' + d + '">' + c[d] + "</label></ib-div>";
		    var e = $('<ib-div class="ib_date_format">' + b + "</ib-div>").hover(function () {
		        $(this).show()
		    }, function () {
		        $(this).hide()
		    });
		    $(document.body).after(e), $('[data-ibcl-id="issue_date"]').datepicker({
		        format: a.date_format
		    }).data("datepicker"), $('[data-ibcl-id="due_date"]').datepicker({
		        format: a.date_format,
		        onRender: function (a) {
		            return cb.setHours(0, 0, 0, 0), a.valueOf() < cb.valueOf() ? "disabled" : ""
		        }
		    }).data("datepicker"), $('[data-ibcl-id="issue_date"], [data-ibcl-id="due_date"]').on("changeDate", function (b) {
		        if ("days" == b.viewMode) {
		            $(this).text($(this).data("date"));
		            var c = parseInt(a["{net_term}"].default_text) || 0;
		            isNaN(parseInt($('[data-ibcl-id="net_term"]').text())) || (c = parseInt($('[data-ibcl-id="net_term"]').text())), "issue_date" == $(this).data("ibcl-id") ? (cb = new Date(b.date), JSON.parse(a.auto_calculate_dates) && (db = new Date(b.date.setDate(cb.getDate() + c)), $('[data-ibcl-id="due_date"]').datepicker("setValue", db).text($('[data-ibcl-id="due_date"]').data("date")), $('[data-ibcl-id="issue_date"]').datepicker("setValue", cb).text($('[data-ibcl-id="issue_date"]').data("date")), $('[data-ibcl-id="issue_date"], [data-ibcl-id="due_date"]').removeClass("ib_stop_animate").addClass("ib_highlight_bg"), setTimeout(function () {
		                $('[data-ibcl-id="issue_date"], [data-ibcl-id="due_date"]').removeClass("ib_highlight_bg")
		            }, 10))) : "due_date" == $(this).data("ibcl-id") && (db = new Date(b.date), JSON.parse(a.auto_calculate_dates) && (c = Math.ceil(Math.abs((db.getTime() - cb.getTime()) / 864e5)), $('[data-ibcl-id="net_term"]').text(c), $('[data-ibcl-id="net_term"], [data-ibcl-id="due_date"]').removeClass("ib_stop_animate").addClass("ib_highlight_bg"), setTimeout(function () {
		                $('[data-ibcl-id="net_term"], [data-ibcl-id="due_date"]').removeClass("ib_highlight_bg")
		            }, 10))), $(this).datepicker("hide")
		        }
		    }).hover(function () {
		        var a = $(this).offset(),
					b = $(this).width();
		        e.show().offset({
		            top: a.top - 5,
		            left: a.left + b
		        })
		    }, function () {
		        e.hide()
		    }), e.find("input:radio").val([a.date_format]).change(function () {
		        a.date_format = $(this).val(), $('[data-ibcl-id="issue_date"], [data-ibcl-id="due_date"]').datepicker("setFormat", a.date_format), $('[data-ibcl-id="issue_date"]').datepicker("setValue", cb).text($('[data-ibcl-id="issue_date"]').data("date")), $('[data-ibcl-id="due_date"]').datepicker("setValue", db).text($('[data-ibcl-id="due_date"]').data("date"))
		    })
		},
		rb = function () {
		    var b = parseInt(a["{net_term}"].default_text) || 0;
		    isNaN(parseInt($('[data-ibcl-id="net_term"]').text())) || (b = parseInt($('[data-ibcl-id="net_term"]').text())), JSON.parse(a.auto_calculate_dates) && (db = new Date(new Date(cb).setDate(cb.getDate() + b)), $('[data-ibcl-id="due_date"]').datepicker("setValue", db).text($('[data-ibcl-id="due_date"]').data("date")))
		},
		sb = [],
		tb = "$",
		ub = "left",
		vb = !0,
		wb = "0,000.00",
		xb = ".",
		yb = ",",
		zb = "Afghan afghani,؋,AFN,255;Albanian lek,L,ALL,255;Algerian dinar,د.ج,DZD,255;Angolan kwanza,Kz,AOA,255;Argentine peso,$,ARS,255;Armenian dram,դր.,AMD,255;Aruban florin,ƒ,AWG,255;Australian dollar,$,AUD,3;Azerbaijani manat,man.,AZN,255;Bahamian dollar,$,BSD,255;Bahraini dinar,.د.ب,BHD,255;Bangladeshi taka,৳,BDT,255;Barbadian dollar,$,BBD,255;Belarusian ruble,Br,BYR,255;Belize dollar,$,BZD,255;Bermudian dollar,$,BMD,255;Bhutanese ngultrum,Nu.,BTN,255;Bolivian boliviano,Bs.,BOB,255;Bosnia and Herzegovina convertible mark,KM,BAM,255;Botswana pula,P,BWP,255;Brazilian real,R$,BRL,255;British pound,£,GBP,5;Brunei dollar,$,BND,255;Bulgarian lev,лв,BGN,255;Burundian franc,Fr,BIF,255;Cambodian riel,៛,KHR,255;Canadian dollar,$,CAD,2;Cape Verdean escudo,$,CVE,255;Cayman Islands dollar,$,KYD,255;Central African CFA franc,Fr,XAF,255;CFP franc,Fr,XPF,255;Chilean peso,$,CLP,255;Chinese yuan,¥,CNY,255;Colombian peso,$,COP,255;Comorian franc,Fr,KMF,255;Congolese franc,Fr,CDF,255;Costa Rican colón,₡,CRC,255;Croatian kuna,kn,HRK,255;Cuban convertible peso,$,CUC,255;Cuban peso,$,CUP,255;Czech koruna,Kč,CZK,255;Danish krone,kr,DKK,255;Djiboutian franc,Fr,DJF,255;Dominican peso,$,DOP,255;East Caribbean dollar,$,XCD,255;Egyptian pound,£,EGP,255;Eritrean nakfa,Nfk,ERN,255;Estonian kroon[B],kr,EEK,255;Ethiopian birr,Br,ETB,255;Euro,€,EUR,4;Falkland Islands pound,£,FKP,255;Fijian dollar,$,FJD,255;Gambian dalasi,D,GMD,255;Georgian lari,ლ,GEL,255;Ghanaian cedi,₵,GHS,255;Gibraltar pound,£,GIP,255;Guatemalan quetzal,Q,GTQ,255;Guinean franc,Fr,GNF,255;Guyanese dollar,$,GYD,255;Haitian gourde,G,HTG,255;Honduran lempira,L,HNL,255;Hong Kong dollar,$,HKD,255;Hungarian forint,Ft,HUF,255;Icelandic króna,kr,ISK,255;Indian rupee,₹,INR,255;Indonesian rupiah,Rp,IDR,255;Iranian rial,﷼,IRR,255;Iraqi dinar,ع.د,IQD,255;Israeli new shekel,₪,ILS,255;Jamaican dollar,$,JMD,255;Japanese yen,¥,JPY,255;Jordanian dinar,د.ا,JOD,255;Kazakhstani tenge,₸,KZT,255;Kenyan shilling,Sh,KES,255;Kuwaiti dinar,د.ك,KWD,255;Kyrgyzstani som,лв,KGS,255;Lao kip,₭,LAK,255;Latvian lats,Ls,LVL,255;Lebanese pound,ل.ل,LBP,255;Lesotho loti,L,LSL,255;Liberian dollar,$,LRD,255;Libyan dinar,ل.د,LYD,255;Lithuanian litas,Lt,LTL,255;Macanese pataca,P,MOP,255;Macedonian denar,ден,MKD,255;Malagasy ariary,Ar,MGA,255;Malawian kwacha,MK,MWK,255;Malaysian ringgit,RM,MYR,255;Maldivian rufiyaa,ރ.,MVR,255;Mauritanian ouguiya,UM,MRO,255;Mauritian rupee,₨,MUR,255;Mexican peso,$,MXN,255;Moldovan leu,L,MDL,255;Mongolian tögrög,₮,MNT,255;Moroccan dirham,د.م.,MAD,255;Mozambican metical,MTn,MZN,255;Myanma kyat,K,MMK,255;Namibian dollar,$,NAD,255;Nepalese rupee,₨,NPR,255;Netherlands Antillean guilder,ƒ,ANG,255;New Taiwan dollar,$,TWD,255;New Zealand dollar,$,NZD,255;Nicaraguan córdoba,C$,NIO,255;Nigerian naira,₦,NGN,255;North Korean won,₩,KPW,255;Norwegian krone,kr,NOK,255;Omani rial,ر.ع.,OMR,255;Pakistani rupee,₨,PKR,255;Panamanian balboa,B/.,PAB,255;Papua New Guinean kina,K,PGK,255;Paraguayan guaraní,₲,PYG,255;Peruvian nuevo sol,S/.,PEN,255;Philippine peso,₱,PHP,255;Polish złoty,zł,PLN,255;Qatari riyal,ر.ق,QAR,255;Romanian leu,L,RON,255;Russian ruble,р.,RUB,255;Rwandan franc,Fr,RWF,255;Saint Helena pound,£,SHP,255;Salvadoran colón,₡,SVC,255;Samoan tala,T,WST,255;São Tomé and Príncipe dobra,Db,STD,255;Saudi riyal,ر.س,SAR,255;Serbian dinar,din.,RSD,255;Seychellois rupee,₨,SCR,255;Sierra Leonean leone,Le,SLL,255;Singapore dollar,$,SGD,255;Solomon Islands dollar,$,SBD,255;Somali shilling,Sh,SOS,255;South African rand,R,ZAR,255;South Korean won,₩,KRW,255;Sri Lankan rupee,Rs,LKR,255;Sudanese pound,£,SDG,255;Surinamese dollar,$,SRD,255;Swazi lilangeni,L,SZL,255;Swedish krona,kr,SEK,255;Swiss franc,Fr,CHF,255;Syrian pound,£,SYP,255;Tajikistani somoni,ЅМ,TJS,255;Tanzanian shilling,Sh,TZS,255;Thai baht,฿,THB,255;Tongan paʻanga,T$,TOP,255;Trinidad and Tobago dollar,$,TTD,255;Tunisian dinar,د.ت,TND,255;Turkish lira,TL,TRY,255;Turkmenistani manat,m,TMT,255;Ugandan shilling,Sh,UGX,255;Ukrainian hryvnia,₴,UAH,255;United Arab Emirates dirham,د.إ,AED,255;United States dollar,$,USD,1;Uruguayan peso,$,UYU,255;Uzbekistani som,лв,UZS,255;Vanuatu vatu,Vt,VUV,255;Venezuelan bolívar,Bs F,VEF,255;Vietnamese đồng,₫,VND,255;West African CFA franc,Fr,XOF,255;Yemeni rial,﷼,YER,255;Zambian kwacha,ZK,ZMK,255;Zimbabwean dollar,$,ZWL,255",
		Ab = function () {
		    $.each(zb.split(";"), function (a, b) {
		        var c = b.split(",");
		        sb.push({
		            name: c[0],
		            symbol: c[1],
		            code: c[2],
		            priority: c[3]
		        })
		    })
		},
		Bb = function () {
		    var a = $('<ib-span class="ib_number_settings"><table><tr><td><input type="radio" id="ib_currency_left" name="ib_currency" value="left" checked /><label for="ib_currency_left" title="' + F[Ib].currency_left + '">$100</label></td><td><input type="radio" id="ib_number_format_1" name="ib_number_format" value="0,000.00" checked /><label for="ib_number_format_1">1,234.56</label></td></tr><tr><td><input type="radio" id="ib_currency_right" name="ib_currency" value="right" /><label for="ib_currency_right" title="' + F[Ib].currency_right + '">100$</label></td><td><input type="radio" id="ib_number_format_3" name="ib_number_format" value="0 000.00" /><label for="ib_number_format_3">1&#8239;234.56</label></td></tr><tr><td></td><td><input type="radio" id="ib_number_format_2" name="ib_number_format" value="0000.00" /><label for="ib_number_format_2">1234.56</label></td></tr><tr><td></td><td><input type="radio" id="ib_number_format_4" name="ib_number_format" value="0.000,00" /><label for="ib_number_format_4">1.234,56</label></td></tr><tr><td></td><td><input type="radio" id="ib_number_format_6" name="ib_number_format" value="0 000,00" /><label for="ib_number_format_6">1&#8239;234,56</label></td></tr><tr><td></td><td><input type="radio" id="ib_number_format_5" name="ib_number_format" value="0000,00" /><label for="ib_number_format_5">1234,56</label></td></tr><tr><td colspan="2" class="ib_show_currency"><input type="checkbox" id="ib_show_currency" name="ib_show_currency" /><label for="ib_show_currency" title="Checking this will show the currency symbol on all amounts on the invoice">Show currency symbol</label></td></tr></table></ib-span>').hover(function () {
		        $(this).show()
		    }, function () {
		        $(this).hide()
		    });
		    $(document.body).after(a), $('[data-ibcl-id="currency"]').typeahead({
		        source: function (a, b) {
		            ib_currencies_combo = [], $.each(sb, function (a, b) {
		                ib_currencies_combo.push("<ib-span data-code='" + b.code + "' data-symbol='" + b.symbol + '\' class="ib_currencies_item"><ib-span>' + b.code + "</ib-span><ib-span>" + b.symbol + "</ib-span><ib-span>" + b.name + "</ib-span></ib-span>")
		            }), b(ib_currencies_combo)
		        },
		        updater: function (a) {
		            return tb = $(a).data("symbol"), gb(), $(a).data("code")
		        },
		        matcher: function (a) {
		            return -1 != $(a).text().toLowerCase().indexOf(this.query.trim().toLowerCase()) ? !0 : void 0
		        },
		        sorter: function (a) {
		            return a.sort()
		        },
		        highlighter: function (a) {
		            var b = $(a).children(":first").text(),
						c = $(a).children(":nth(1)").text(),
						d = $(a).children(":last").text(),
						e = $(a).text("").prop("outerHTML"),
						f = new RegExp("(" + this.query + ")", "gi"),
						g = '<strong style="font-weight:bold;">$1</strong>';
		            return $(e).html($("<ib-span />").html(b.replace(f, g)).prop("outerHTML") + $("<ib-span />").html(c.replace(f, g)).prop("outerHTML") + $("<ib-span />").html(d.replace(f, g)).prop("outerHTML")).prop("outerHTML")
		        }
		    }).blur(function () {
		        var a = $(this),
					b = $(this).text().toUpperCase();
		        tb = "", a.text(b), $.each(sb, function (c, d) {
		            return d.code.toUpperCase() == b ? (a.text(d.code), tb = d.symbol, void gb()) : void 0
		        })
		    }).hover(function () {
		        var b = $(this).offset(),
					c = $(this).width();
		        a.show().offset({
		            top: b.top - 5,
		            left: b.left + c + 1
		        })
		    }, function () {
		        a.hide()
		    }), $('[name="ib_currency"][value="' + ub + '"]').attr("checked", "checked"), JSON.parse(vb) && $('[name="ib_show_currency"]').attr("checked", "checked"), $('[name="ib_number_format"][value="' + wb + '"]').attr("checked", "checked"), $('[name="ib_currency"]').change(function () {
		        ub = $(this).val(), gb()
		    }), $('[name="ib_show_currency"]').change(function () {
		        vb = $(this).is(":checked"), gb()
		    }), $('[name="ib_number_format"]').change(function () {
		        wb = $(this).val(), wb && (xb = wb[wb.length - 3], yb = wb[1], isNaN(parseInt(yb)) || (yb = ""));
		        for (var a = $('[data-iterate="item"]'), b = 0; b < a.length; b++) {
		            var c = $(a[b]);
		            c.find('[data-ibcl-id="item_quantity"]').text(c.find('[data-ibcl-id="item_quantity"]').text().replace(/[.,]/g, xb)), c.find('[data-ibcl-id="item_price"]').text(c.find('[data-ibcl-id="item_price"]').text().replace(/[.,]/g, xb)), c.find('[data-ibcl-id="item_discount"]').text(c.find('[data-ibcl-id="item_discount"]').text().replace(/[.,]/g, xb)), c.find('[data-ibcl-id="item_tax"]').text(c.find('[data-ibcl-id="item_tax"]').text().replace(/[.,]/g, xb))
		        }
		        $('[data-ibcl-id="amount_paid"]').text($('[data-ibcl-id="amount_paid"]').text().replace(/[.,]/g, xb)), gb()
		    })
		},
		Cb = function () {
		    var b = {
		        hash: "",
		        type: "invoice",
		        company_logo: "",
		        company_name: "",
		        company_address: "",
		        company_city_zip_state: "",
		        company_phone_fax: "",
		        company_email_web: "",
		        payment_info1: "",
		        payment_info2: "",
		        payment_info3: "",
		        payment_info4: "",
		        payment_info5: "",
		        issue_date_label: "",
		        issue_date: "",
		        net_term_label: "",
		        net_term: "0",
		        due_date_label: "",
		        due_date: "",
		        currency_label: "",
		        po_number_label: "",
		        po_number: "",
		        bill_to_label: "",
		        client_name: "",
		        client_address: "",
		        client_city_zip_state: "",
		        client_phone_fax: "",
		        client_email: "",
		        client_other: "",
		        invoice_title: "",
		        invoice_number: "",
		        item_row_number_label: "",
		        item_description_label: "",
		        item_quantity_label: "",
		        item_price_label: "",
		        item_discount_label: "",
		        item_tax_label: "",
		        item_line_total_label: "",
		        amount_subtotal_label: "",
		        amount_subtotal: "0",
		        amount_total_label: "",
		        amount_total: "0",
		        amount_paid_label: "",
		        amount_paid: "0",
		        amount_due_label: "",
		        amount_due: "0",
		        terms_label: "",
		        terms: "",
		        items_columns: [],
		        items: [],
		        taxes: [],
		        date_format: "",
		        currency_code: "",
		        currency_symbol: "",
		        currency_position: "",
		        show_currency: "true",
		        number_format: "",
		        lang: "en",
		        document_custom: [],
		        client_custom: []
		    };
		    b.hash = $('meta[name="template-hash"]').attr("content") || b.hash, b.type = $('meta[name="document-type"]').attr("content") || b.type, $('[data-logo="company_logo"]').is(":visible") && (b.company_logo = $('[data-logo="company_logo"]').attr("src") || b.company_logo), $("[data-ibcl-id]").each(function (a, c) {
		        var d = $(c);
		        b[d.data("ibcl-id")] = B(A(d.html())) || b[d.data("ibcl-id")]
		    }), b.net_term || (b.net_term = Math.floor(Math.abs((db.getTime() - cb.getTime()) / 864e5))), $(".ib_show_hide_columns > ib-span > input:checkbox").each(function (a, c) {
		        $(c).is(":checked") && b.items_columns.push($(c).val())
		    }), delete b.item_row_number, delete b.item_description, delete b.item_quantity, delete b.item_price, delete b.item_discount, delete b.item_tax, delete b.item_line_total, $('[data-iterate="item"]').each(function (a, c) {
		        var d = {};
		        $(c).find("*").each(function (a, b) {
		            var c = $(b);
		            c.data("ibcl-id") && -1 != ["item_row_number", "item_description", "item_quantity", "item_price", "item_tax_percentage", "item_tax", "item_discount", "item_line_total"].indexOf(c.data("ibcl-id")) && (!c.data("ibcl-id") && y() && (c = c.find(".ibcl_ie_contenteditable")), d[c.data("ibcl-id")] = B(A(c.html())))
		        }), d.item_row_number = $(d.item_row_number).text(), d.item_quantity = d.item_quantity.toValidNumberString(), d.item_price = d.item_price.toValidNumberString(), d.item_tax_percentage = d.item_tax.toValidNumberString(), d.item_tax = bb(d.item_tax.toValidNumberString()), d.item_discount = d.item_discount.toValidNumberString(), d.item_line_total = d.item_line_total.toValidNumberString(), b.items.push(d)
		    }), delete b.tax_name, delete b.tax_value, $('[data-iterate="tax"]:visible').each(function (a, c) {
		        var d = {};
		        $(c).find("*").each(function (a, b) {
		            var c = $(b);
		            c.data("ibcl-id") && -1 != ["tax_name", "tax_value"].indexOf(c.data("ibcl-id")) && (!c.data("ibcl-id") && y() && (c = c.find(".ibcl_ie_contenteditable")), d[c.data("ibcl-id")] = B(A(c.html())), c.attr("data-ib-value") && (d.tax_percentage = c.attr("data-ib-value").toValidNumberString()))
		        }), d.tax_value = d.tax_value.toValidNumberString(), b.taxes.push(d)
		    }), b.amount_subtotal = b.amount_subtotal.toValidNumberString(), b.amount_total = b.amount_total.toValidNumberString(), b.amount_paid = b.amount_paid.toValidNumberString(), b.amount_due = b.amount_due.toValidNumberString(), b.date_format = a.date_format, b.currency_code = b.currency, b.currency_symbol = tb, delete b.currency, b.currency_position = $('.ib_number_settings input[name="ib_currency"]:checked').val(), b.show_currency = $('.ib_number_settings input[name="ib_show_currency"]').is(":checked"), b.number_format = $('.ib_number_settings input[name="ib_number_format"]:checked').val();
		    for (var c in b) /document_custom_[a-zA-Z0-9_]+ /.test(c) ? (b.document_custom.push({
		        name: c.replace(/document_custom_([a-zA-Z0-9_]+)/, "$1"),
		        type: "constant",
		        value: b[c]
		    }), delete b[c]) : /client_custom_[a-zA-Z0-9_]+/.test(c) && (b.client_custom.push({
		        name: c.replace(/client_custom_([a-zA-Z0-9_]+)/, "$1"),
		        value: b[c]
		    }), delete b[c]);
		    return b
		},
		Db = !1,
		Eb = function () {
		    if (!Db) {
		        Db = !0, $(this).addClass("ib_disabled_button").attr("disabled", "disabled").find("i.fa").removeClass("fa-cloud-upload").addClass("fa-spinner fa-spin");
		        var a = $("<div />").text(JSON.stringify(Cb())).html().replace(/"/gi, "&quot;");
		        g += f + "&utm_term=" + encodeURIComponent(document.title), $('<form id="ib_save_tamplate_form" style="display:none !important;" action="' + g + '" method="POST" />').append($('<input type="hidden" name="invoice_data" value="' + a + '" />')).appendTo($(document.body)).submit()
		    }
		},
		Fb = function () {
		    var b, c = ib_multiline.stripIndent(ib_raw_data).replace(/\\\//g, "/").replace(/'/g, "\\'").replace(/\r\n/g, "[crlf]"),
				d = Cb();
		    c = c.replace("|item_row_number|", a["{item_row_number}"].default_text), c = c.replace("|item_description|", a["{item_description}"].default_text), c = c.replace("|item_quantity|", a["{item_quantity}"].default_text), c = c.replace("|item_price|", a["{item_price}"].default_text), c = c.replace("|item_discount|", a["{item_discount}"].default_text), c = c.replace("|item_tax|", a["{item_tax}"].default_text), c = c.replace("|item_line_total|", a["{item_line_total}"].default_text), c = c.replace("|tax_name|", a["{tax_name}"].default_text), c = c.replace("|tax_value|", a["{tax_value}"].default_text), c = c.replace("|amount_total|", a["{amount_total}"].default_text), c = c.replace("|amount_due|", a["{amount_due}"].default_text), c = c.replace("|default_quantity|", a.default_quantity), c = c.replace("|default_price|", a.default_price), c = c.replace("|default_discount|", a.default_discount), c = c.replace("|default_tax|", a.default_tax), c = c.replace("|default_number_rows|", a.default_number_rows), c = c.replace("|auto_calculate_dates|", a.auto_calculate_dates), c = c.replace("|load_items|", a.load_items), c = c.replace("|invoicebus_fineprint|", a.invoicebus_fineprint), c = c.replace("|lang|", Ib);
		    for (var e in d) {
		        var f = "|" + e + "|",
					g = d[e].toString().replace(/\n/g, "<br />");
		        switch (e) {
		            case "issue_date":
		            case "due_date":
		                c = c.replace(f, "");
		                break;
		            case "items_columns":
		                c = c.replace("|default_columns|", d[e].join(","));
		                break;
		            case "items":
		                g = "";
		                var h = d[e];
		                for (b = 0; b < h.length; b++) g += (h[b].item_description || "").toString().replace(/\n/g, "<br />") + "@||@" + (h[b].item_quantity || "").toString().replace(/\n/g, "<br />") + "@||@" + (h[b].item_price || "").toString().replace(/\n/g, "<br />") + "@||@" + (h[b].item_discount || "").toString().replace(/\n/g, "<br />") + "@||@" + (h[b].item_tax_percentage || "").toString().replace(/\n/g, "<br />") + "\r\n";
		                c = c.replace(f, g);
		                break;
		            case "currency_code":
		                c = c.replace("|currency|", g);
		                break;
		            case "document_custom":
		            case "client_custom":
		                g = "";
		                var i = d[e];
		                for (b = 0; b < i.length; b++) g += (i[b].name || "").toString().replace(/\n/g, "<br />") + "@||@" + (i[b].value || "").toString().replace(/\n/g, "<br />") + "\r\n";
		                c = c.replace(f, g);
		                break;
		            default:
		                c = c.replace(f, g)
		        }
		    }
		    return c = c.replace(/\[crlf\]/g, "\r\n")
		},
		Gb = function () {
		    var a = "".replace(/\[crlf\]/g, "\r\n");
		    a && $(document.body).before($(a))
		},
		Hb = function (a, b) {
		    for (var c = b || window.location.search.substring(1), d = c.split("&"), e = 0; e < d.length; e++) {
		        var f = d[e].split("=");
		        if (f[0] == a) return f[1]
		    }
		    return !1
		};
    p(j);
    var Ib = (I(), Hb("lang") || "");
    F[Ib] || (Ib = "");
    var Jb = Ib,
		Kb = Hb("data"),
		Lb = document.createElement("script");
    Lb.onerror = function () {
        Lb = document.createElement("script"), Lb.src = "data.js", document.body.appendChild(Lb)
    }, Lb.src = "data.txt", Ib && (Lb.src = i + "lang/" + Ib + ".txt"), document.body.appendChild(Lb), Kb && "txt" == Kb.split(".").pop().toLowerCase() && (Lb = document.createElement("script"), Lb.src = Kb, document.body.appendChild(Lb)), Lb = document.createElement("script"), Lb.src = i + "docs/raw-data/raw-data-" + (Ib || "en") + ".js", document.body.appendChild(Lb), q(function () {
        t()
    })
}();
var ib_TableDnD = function (a) {
    var b = null;
    this.dragObject = null, this.mouseOffset = null, this.oldY = 0, this.init = function () {
        for (var a = $('[data-iterate="item"]'), c = 0; c < a.length; c++) this.makeDraggable(a[c]);
        document.onmousemove = function (a) {
            if (b && b.dragObject) {
                a = a || window.event;
                var c = b.mouseCoords(a),
                    d = c.y;
                if (d != b.oldY) {
                    var e = d > b.oldY;
                    b.oldY = d, $(b.dragObject).addClass("ib_dragrow"), document.body.style.cursor = "move";
                    var f = b.findDropTargetRow(d);
                    f && (e && b.dragObject != f ? b.dragObject.parentNode.insertBefore(b.dragObject, f.nextSibling) : e || b.dragObject == f || b.dragObject.parentNode.insertBefore(b.dragObject, f))
                }
                return !1
            }
        }, document.onmouseup = function () {
            if (b && b.dragObject) {
                var a = b.dragObject;
                $(b.dragObject).removeClass("ib_dragrow"), b.dragObject = null, b.onDrop(a), b = null
            }
        }
    }, this.onDrop = function () {
        document.body.style.cursor = "default", a()
    };
    var c = function () {
        var a = 0,
            b = 0;
        return "number" == typeof window.pageYOffset ? (b = window.pageYOffset, a = window.pageXOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (b = document.body.scrollTop, a = document.body.scrollLeft) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (b = document.documentElement.scrollTop, a = document.documentElement.scrollLeft), [a, b]
    };
    this.mouseCoords = function (a) {
        return a.pageX || a.pageY ? {
            x: a.pageX,
            y: a.pageY
        } : {
            x: a.clientX + c()[0],
            y: a.clientY + c()[1]
        }
    }, this.getMouseOffset = function (a, b) {
        e = b || window.event;
        var c = $(a).offset(),
            d = this.mouseCoords(e);
        return {
            x: d.x - c.left,
            y: d.y - c.top
        }
    };
    var d = function (a) {
        return window.event ? (a = window.event, a.srcElement) : a.target
    };
    this.makeDraggable = function (a) {
        if (a) {
            var c = this;
            $(a).find(".ib_move").on("mousedown", function (e) {
                var f = d(e);
                return "INPUT" == f.tagName || "SELECT" == f.tagName || "TEXTAREA" == f.tagName ? !0 : (b = c, c.dragObject = a, c.mouseOffset = c.getMouseOffset(a, e), !1)
            }), $(a).find(".ib_move").css("cursor", "move")
        }
    }, this.findDropTargetRow = function (a) {
        for (var b = $('[data-iterate="item"]'), c = 0; c < b.length; c++) {
            var d = b[c],
                e = $(d).offset().top,
                f = parseInt(d.offsetHeight);
            if (0 === d.offsetHeight && (e = $(d.firstChild).offset().top, f = parseInt(d.firstChild.offsetHeight)), a > e - f && e + f > a) return d
        }
        return null
    }
},
	ib_loadBootstrapDatepicker = function () {
	    var a = function (a, c) {
	        if (this.element = $(a), this.format = b.parseFormat(c.format || this.element.data("date-format") || "mm/dd/yyyy"), this.picker = $(b.template).appendTo("body").on({
	            click: $.proxy(this.click, this)
	        }), this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on") : !1, this.isInput ? this.element.on({
	            focus: $.proxy(this.show, this),
	            keyup: $.proxy(this.update, this)
	        }) : this.component ? this.component.on("click", $.proxy(this.show, this)) : this.element.on("click", $.proxy(this.show, this)), this.minViewMode = c.minViewMode || this.element.data("date-minviewmode") || 0, "string" == typeof this.minViewMode) switch (this.minViewMode) {
	            case "months":
	                this.minViewMode = 1;
	                break;
	            case "years":
	                this.minViewMode = 2;
	                break;
	            default:
	                this.minViewMode = 0
	        }
	        if (this.viewMode = c.viewMode || this.element.data("date-viewmode") || 0, "string" == typeof this.viewMode) switch (this.viewMode) {
	            case "months":
	                this.viewMode = 1;
	                break;
	            case "years":
	                this.viewMode = 2;
	                break;
	            default:
	                this.viewMode = 0
	        }
	        this.startViewMode = this.viewMode, this.weekStart = c.weekStart || this.element.data("date-weekstart") || 0, this.weekEnd = 0 === this.weekStart ? 6 : this.weekStart - 1, this.onRender = c.onRender, this.fillDow(), this.fillMonths(), this.update(), this.showMode()
	    };
	    a.prototype = {
	        constructor: a,
	        show: function (a) {
	            this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.place(), $(window).on("resize", $.proxy(this.place, this)), a && (a.stopPropagation(), a.preventDefault()), !this.isInput;
	            var b = this;
	            $(document).on("mousedown", function (a) {
	                0 === $(a.target).closest(".datepicker").length && b.hide()
	            }), this.element.trigger({
	                type: "show",
	                date: this.date
	            }), this.fill()
	        },
	        hide: function () {
	            this.picker.hide(), $(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || $(document).off("mousedown", this.hide), this.element.trigger({
	                type: "hide",
	                date: this.date
	            })
	        },
	        set: function () {
	            var a = b.formatDate(this.date, this.format);
	            this.isInput ? this.element.prop("value", a) : (this.component && this.element.find("input").prop("value", a), this.element.data("date", a))
	        },
	        setValue: function (a) {
	            this.date = "string" == typeof a ? b.parseDate(a, this.format) : new Date(a), this.set(), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
	        },
	        setFormat: function (a) {
	            this.format = b.parseFormat(a);
	            var c = b.formatDate(this.date, this.format);
	            this.isInput ? this.element.prop("value", c) : (this.component && this.element.find("input").prop("value", c), this.element.data("date", c)), this.set(), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
	        },
	        place: function () {
	            var a = this.component ? this.component.offset() : this.element.offset();
	            this.picker.css({
	                top: a.top + this.height,
	                left: a.left + this.element.width() / 2
	            })
	        },
	        update: function (a) {
	            this.date = b.parseDate("string" == typeof a ? a : this.isInput ? this.element.prop("value") : this.element.data("date"), this.format), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
	        },
	        fillDow: function () {
	            for (var a = this.weekStart, c = "<tr>"; a < this.weekStart + 7;) c += '<th class="dow">' + b.dates.daysMin[a++ % 7] + "</th>";
	            c += "</tr>", this.picker.find(".datepicker-days thead").append(c)
	        },
	        fillMonths: function () {
	            for (var a = "", c = 0; 12 > c;) a += '<ib-span class="month">' + b.dates.monthsShort[c++] + "</ib-span>";
	            this.picker.find(".datepicker-months td").append(a)
	        },
	        fill: function () {
	            var a = new Date(this.viewDate),
					c = a.getFullYear(),
					d = a.getMonth(),
					e = this.date.valueOf();
	            this.picker.find(".datepicker-days th:eq(1)").text(b.dates.months[d] + " " + c);
	            var f = new Date(c, d - 1, 28, 0, 0, 0, 0),
					g = b.getDaysInMonth(f.getFullYear(), f.getMonth());
	            f.setDate(g), f.setDate(g - (f.getDay() - this.weekStart + 7) % 7);
	            var h = new Date(f);
	            h.setDate(h.getDate() + 42), h = h.valueOf();
	            for (var i, j, k, l = []; f.valueOf() < h;) f.getDay() === this.weekStart && l.push("<tr>"), i = this.onRender(f), j = f.getFullYear(), k = f.getMonth(), d > k && j === c || c > j ? i += " old" : (k > d && j === c || j > c) && (i += " new"), f.valueOf() === e && (i += " active"), l.push('<td class="day ' + i + '">' + f.getDate() + "</td>"), f.getDay() === this.weekEnd && l.push("</tr>"), f.setDate(f.getDate() + 1);
	            this.picker.find(".datepicker-days tbody").empty().append(l.join(""));
	            var m = this.date.getFullYear(),
					n = this.picker.find(".datepicker-months").find("th:eq(1)").text(c).end().find("ib-span").removeClass("active");
	            m === c && n.eq(this.date.getMonth()).addClass("active"), l = "", c = 10 * parseInt(c / 10, 10);
	            var o = this.picker.find(".datepicker-years").find("th:eq(1)").text(c + "-" + (c + 9)).end().find("td");
	            c -= 1;
	            for (var p = -1; 11 > p; p++) l += '<ib-span class="year' + (-1 === p || 10 === p ? " old" : "") + (m === c ? " active" : "") + '">' + c + "</ib-span>", c += 1;
	            o.html(l)
	        },
	        click: function (a) {
	            a.stopPropagation(), a.preventDefault();
	            var c = $(a.target).closest("ib-span, td, th");
	            if (1 === c.length) {
	                var d, e, f;
	                switch (c[0].nodeName.toLowerCase()) {
	                    case "th":
	                        switch (c[0].className) {
	                            case "switch":
	                                this.showMode(1);
	                                break;
	                            case "prev":
	                            case "next":
	                                this.viewDate["set" + b.modes[this.viewMode].navFnc].call(this.viewDate, this.viewDate["get" + b.modes[this.viewMode].navFnc].call(this.viewDate) + b.modes[this.viewMode].navStep * ("prev" === c[0].className ? -1 : 1)), this.fill(), this.set()
	                        }
	                        break;
	                    case "ib-span":
	                        c.is(".month") ? (e = c.parent().find("ib-span").index(c), this.viewDate.setMonth(e)) : (f = parseInt(c.text(), 10) || 0, this.viewDate.setFullYear(f)), 0 !== this.viewMode && (this.date = new Date(this.viewDate), this.element.trigger({
	                            type: "changeDate",
	                            date: this.date,
	                            viewMode: b.modes[this.viewMode].clsName
	                        })), this.showMode(-1), this.fill(), this.set();
	                        break;
	                    case "td":
	                        c.is(".day") && !c.is(".disabled") && (d = parseInt(c.text(), 10) || 1, e = this.viewDate.getMonth(), c.is(".old") ? e -= 1 : c.is(".new") && (e += 1), f = this.viewDate.getFullYear(), this.date = new Date(f, e, d, 0, 0, 0, 0), this.viewDate = new Date(f, e, Math.min(28, d), 0, 0, 0, 0), this.fill(), this.set(), this.element.trigger({
	                            type: "changeDate",
	                            date: this.date,
	                            viewMode: b.modes[this.viewMode].clsName
	                        }))
	                }
	            }
	        },
	        mousedown: function (a) {
	            a.stopPropagation(), a.preventDefault()
	        },
	        showMode: function (a) {
	            a && (this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + a))), this.picker.find(">div").hide().filter(".datepicker-" + b.modes[this.viewMode].clsName).show()
	        }
	    }, $.fn.datepicker = function (b, c) {
	        return this.each(function () {
	            var d = $(this),
					e = d.data("datepicker"),
					f = "object" == typeof b && b;
	            e || d.data("datepicker", e = new a(this, $.extend({}, $.fn.datepicker.defaults, f))), "string" == typeof b && e[b](c)
	        })
	    }, $.fn.datepicker.defaults = {
	        onRender: function () {
	            return ""
	        }
	    }, $.fn.datepicker.Constructor = a;
	    var b = {
	        modes: [{
	            clsName: "days",
	            navFnc: "Month",
	            navStep: 1
	        }, {
	            clsName: "months",
	            navFnc: "FullYear",
	            navStep: 1
	        }, {
	            clsName: "years",
	            navFnc: "FullYear",
	            navStep: 10
	        }],
	        dates: {
	            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	        },
	        isLeapYear: function (a) {
	            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
	        },
	        getDaysInMonth: function (a, c) {
	            return [31, b.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][c]
	        },
	        parseFormat: function (a) {
	            var b = a.match(/[.\/\-\s].*?/),
					c = a.split(/\W+/);
	            if (!b || !c || 0 === c.length) throw new Error("Invalid date format.");
	            return {
	                separator: b,
	                parts: c
	            }
	        },
	        parseDate: function (a, b) {
	            var c, d = a.split(b.separator);
	            if (a = new Date, a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0), d.length === b.parts.length) {
	                for (var e = a.getFullYear(), f = a.getDate(), g = a.getMonth(), h = 0, i = b.parts.length; i > h; h++) switch (c = parseInt(d[h], 10) || 1, b.parts[h]) {
	                    case "dd":
	                    case "d":
	                        f = c, a.setDate(c);
	                        break;
	                    case "mm":
	                    case "m":
	                        g = c - 1, a.setMonth(c - 1);
	                        break;
	                    case "yy":
	                        e = 2e3 + c, a.setFullYear(2e3 + c);
	                        break;
	                    case "yyyy":
	                        e = c, a.setFullYear(c)
	                }
	                a = new Date(e, g, f, 0, 0, 0)
	            }
	            return a
	        },
	        formatDate: function (a, b) {
	            var c = {
	                d: a.getDate(),
	                m: a.getMonth() + 1,
	                yy: a.getFullYear().toString().substring(2),
	                yyyy: a.getFullYear()
	            };
	            c.dd = (c.d < 10 ? "0" : "") + c.d, c.mm = (c.m < 10 ? "0" : "") + c.m, a = [];
	            for (var d = 0, e = b.parts.length; e > d; d++) a.push(c[b.parts[d]]);
	            return a.join(b.separator)
	        },
	        headTemplate: '<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',
	        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
	    };
	    b.template = '<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">' + b.headTemplate + '<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">' + b.headTemplate + b.contTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + b.headTemplate + b.contTemplate + "</table></div></div>"
	},
	ib_loadBootstrapTypeahead = function () {
	    "use strict";
	    var a = function (a, b) {
	        this.$element = $(a), this.options = $.extend({}, $.fn.typeahead.defaults, b), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.select = this.options.select || this.select, this.autoSelect = "boolean" == typeof this.options.autoSelect ? this.options.autoSelect : !0, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.delay = "number" == typeof this.options.delay ? this.options.delay : 250, this.$menu = $(this.options.menu), this.shown = !1, this.listen(), this.showHintOnFocus = "boolean" == typeof this.options.showHintOnFocus ? this.options.showHintOnFocus : !1
	    };
	    a.prototype = {
	        constructor: a,
	        select: function () {
	            var a = this.$menu.find(".active").data("value");
	            return (this.autoSelect || a) && this.$element.text(this.updater(a)).change(), this.hide()
	        },
	        updater: function (a) {
	            return a
	        },
	        setSource: function (a) {
	            this.source = a
	        },
	        show: function () {
	            var a, b = $.extend({}, this.$element.offset(), {
	                height: this.$element[0].offsetHeight
	            });
	            return a = "function" == typeof this.options.scrollHeight ? this.options.scrollHeight.call() : this.options.scrollHeight, this.$menu.appendTo(document.body).css({
	                top: b.top + b.height + a,
	                left: b.left
	            }).show(), this.shown = !0, this
	        },
	        hide: function () {
	            return this.$menu.hide(), this.shown = !1, this
	        },
	        lookup: function (a) {
	            var b;
	            if (this.query = "undefined" != typeof a && null !== a ? a : this.$element.text() || "", this.query.length < this.options.minLength) return this.shown ? this.hide() : this;
	            var c = $.proxy(function () {
	                b = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source, b && this.process(b)
	            }, this);
	            clearTimeout(this.lookupWorker), this.lookupWorker = setTimeout(c, this.delay)
	        },
	        process: function (a) {
	            var b = this;
	            return a = $.grep(a, function (a) {
	                return b.matcher(a)
	            }), a = this.sorter(a), a.length ? "all" == this.options.items ? this.render(a).show() : this.render(a.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
	        },
	        matcher: function (a) {
	            return ~a.toLowerCase().indexOf(this.query.toLowerCase())
	        },
	        sorter: function (a) {
	            for (var b, c = [], d = [], e = []; b = a.shift() ;) b.toLowerCase().indexOf(this.query.toLowerCase()) ? ~b.indexOf(this.query) ? d.push(b) : e.push(b) : c.push(b);
	            return c.concat(d, e)
	        },
	        highlighter: function (a) {
	            var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
	            return a.replace(new RegExp("(" + b + ")", "ig"), function (a, b) {
	                return "<strong>" + b + "</strong>"
	            })
	        },
	        render: function (a) {
	            var b = this;
	            return a = $(a).map(function (a, c) {
	                return a = $(b.options.item).data("value", c), a.find("a").html(b.highlighter(c)), a[0]
	            }), this.autoSelect && a.first().addClass("active"), this.$menu.html(a), this
	        },
	        next: function () {
	            var a = this.$menu.find(".active").removeClass("active"),
					b = a.next();
	            b.length || (b = $(this.$menu.find("li")[0])), b.addClass("active")
	        },
	        prev: function () {
	            var a = this.$menu.find(".active").removeClass("active"),
					b = a.prev();
	            b.length || (b = this.$menu.find("li").last()), b.addClass("active")
	        },
	        listen: function () {
	            this.$element.on("focus", $.proxy(this.focus, this)).on("blur", $.proxy(this.blur, this)).on("keypress", $.proxy(this.keypress, this)).on("keyup", $.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", $.proxy(this.keydown, this)), this.$menu.on("click", $.proxy(this.click, this)).on("mouseenter", "li", $.proxy(this.mouseenter, this)).on("mouseleave", "li", $.proxy(this.mouseleave, this))
	        },
	        destroy: function () {
	            this.$element.data("typeahead", null), this.$element.off("focus").off("blur").off("keypress").off("keyup"), this.eventSupported("keydown") && this.$element.off("keydown"), this.$menu.remove()
	        },
	        eventSupported: function (a) {
	            var b = a in this.$element;
	            return b || (this.$element.setAttribute(a, "return;"), b = "function" == typeof this.$element[a]), b
	        },
	        move: function (a) {
	            if (this.shown) {
	                switch (a.keyCode) {
	                    case 9:
	                    case 13:
	                    case 27:
	                        a.preventDefault();
	                        break;
	                    case 38:
	                        a.preventDefault(), this.prev();
	                        break;
	                    case 40:
	                        a.preventDefault(), this.next()
	                }
	                a.stopPropagation()
	            }
	        },
	        keydown: function (a) {
	            this.suppressKeyPressRepeat = ~$.inArray(a.keyCode, [40, 38, 9, 13, 27]), this.shown || 40 != a.keyCode ? this.move(a) : this.lookup("")
	        },
	        keypress: function (a) {
	            this.suppressKeyPressRepeat || this.move(a)
	        },
	        keyup: function (a) {
	            switch (a.keyCode) {
	                case 40:
	                case 38:
	                case 16:
	                case 17:
	                case 18:
	                    break;
	                case 9:
	                case 13:
	                    if (!this.shown) return;
	                    this.select();
	                    break;
	                case 27:
	                    if (!this.shown) return;
	                    this.hide();
	                    break;
	                default:
	                    this.lookup()
	            }
	            a.stopPropagation(), a.preventDefault()
	        },
	        focus: function () {
	            this.focused || (this.focused = !0, (0 === this.options.minLength && !this.$element.text() || this.options.showHintOnFocus) && this.lookup())
	        },
	        blur: function () {
	            this.focused = !1, !this.mousedover && this.shown && this.hide()
	        },
	        click: function (a) {
	            a.stopPropagation(), a.preventDefault(), this.select(), this.$element.focus()
	        },
	        mouseenter: function (a) {
	            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), $(a.currentTarget).addClass("active")
	        },
	        mouseleave: function () {
	            this.mousedover = !1, !this.focused && this.shown && this.hide()
	        }
	    };
	    var b = $.fn.typeahead;
	    $.fn.typeahead = function (b) {
	        var c = arguments;
	        return this.each(function () {
	            var d = $(this),
					e = d.data("typeahead"),
					f = "object" == typeof b && b;
	            e || d.data("typeahead", e = new a(this, f)), "string" == typeof b && (c.length > 1 ? e[b].apply(e, Array.prototype.slice.call(c, 1)) : e[b]())
	        })
	    }, $.fn.typeahead.defaults = {
	        source: [],
	        items: 8,
	        menu: '<ul class="typeahead dropdown-menu"></ul>',
	        item: '<li><a href="#"></a></li>',
	        minLength: 1,
	        scrollHeight: 0,
	        autoSelect: !0
	    }, $.fn.typeahead.Constructor = a, $.fn.typeahead.noConflict = function () {
	        return $.fn.typeahead = b, this
	    }, $(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function () {
	        var a = $(this);
	        a.data("typeahead") || a.typeahead(a.data())
	    })
	},
	ib_stripIndent = function (a) {
	    var b = a.match(/^[ \t]*(?=\S)/gm);
	    if (!b) return a;
	    var c = Math.min.apply(Math, b.map(function (a) {
	        return a.length
	    })),
			d = new RegExp("^[ \\t]{" + c + "}", "gm");
	    return c > 0 ? a.replace(d, "") : a
	},
	reCommentContents = /\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//,
	ib_multiline = function (a) {
	    if ("function" != typeof a) throw new TypeError("Expected a function");
	    var b = reCommentContents.exec(a.toString());
	    if (!b) throw new TypeError("Multiline comment missing.");
	    return b[1]
	};
ib_multiline.stripIndent = function (a) {
    return ib_stripIndent(ib_multiline(a))
};
var ib_parseData = function (a) {
    function b(a) {
        return a.trim()
    }
    var c, d, e, f, g, h = [],
		i = {};
    for (c = a.split("\n"), d = 0; d < c.length; d++)
        if (f = c[d].trim(), "#" != f) {
            if ("[" == f[0]) {
                var j = f.substring(1, f.length - 1);
                i[j] = c[d + 1].replace(/\r|\n/g, "")
            }
            if ("[default_columns]" == f && (i.default_columns = i.default_columns.split(",").map(b)), "[items]" == f) {
                for (e = d + 1, f = c[e].replace(/\r|\n/g, "") ;
					"" !== f;) {
                    var k = f.split("@||@");
                    h.push({
                        item_description: k[0],
                        item_quantity: k[1],
                        item_price: k[2],
                        item_discount: k[3],
                        item_tax: k[4]
                    }), e++, f = c[e].trim()
                }
                i.items = h
            }
            if ("[document_custom]" == f)
                for (e = d + 1, f = c[e].replace(/\r|\n/g, "") ;
					"" !== f;) g = f.split("@||@"), i["{document_custom_" + g[0] + "}"] = g[1], e++, f = c[e].trim();
            if ("[client_custom]" == f)
                for (e = d + 1, f = c[e].replace(/\r|\n/g, "") ;
					"" !== f;) g = f.split("@||@"), i["{client_custom_" + g[0] + "}"] = g[1], e++, f = c[e].trim()
        }
    return delete i.document_custom, delete i.client_custom, i
};
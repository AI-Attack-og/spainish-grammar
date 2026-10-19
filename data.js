/*
  Content data for the Spanish Grammar Guide.
  Structure: array of Parts, each with a title and array of Sections,
  each Section has a title and HTML content string.
*/

const GRAMMAR_DATA = [
  {
    id: "part-1",
    title: "PART 1: Foundations (Level A1)",
    sections: [
      {
        id: "1-1",
        title: "1.1 The Spanish Alphabet and Pronunciation",
        html: `
          <p>The Spanish alphabet (el abecedario) is largely phonetic, meaning words are pronounced as they are spelled once you know the rules.</p>
          <ul>
            <li><strong>A (a)</strong>: Like 'a' in "father". (e.g., <em>agua</em>, <em>alto</em>)</li>
            <li><strong>B (be)</strong>: At the beginning of a phrase or after 'm' or 'n', it's like English 'b'. Elsewhere, it's a softer 'b' where lips barely touch (fricative). (e.g., <em>barco</em>, <em>lobo</em>)</li>
            <li><strong>C (ce)</strong>: Before 'e' or 'i', it sounds like 's' in Latin America, or 'th' in Spain (ceceo). Before 'a', 'o', 'u', it sounds like 'k'. (e.g., <em>cielo</em>, <em>casa</em>)</li>
            <li><strong>D (de)</strong>: Like 'd' in "dog", but softer, tongue touching the back of the upper teeth. Between vowels, it sounds like a soft 'th' in "the". (e.g., <em>dedo</em>, <em>nada</em>)</li>
            <li><strong>E (e)</strong>: Like 'e' in "pet". (e.g., <em>elefante</em>)</li>
            <li><strong>F (efe)</strong>: Like English 'f'. (e.g., <em>fuego</em>)</li>
            <li><strong>G (ge)</strong>: Before 'e' or 'i', it sounds like a raspy English 'h'. Before 'a', 'o', 'u', it's a hard 'g' as in "go". (e.g., <em>gente</em>, <em>gato</em>)</li>
            <li><strong>H (hache)</strong>: ALWAYS silent. (e.g., <em>hola</em>, <em>huevo</em>)</li>
            <li><strong>I (i)</strong>: Like 'ee' in "see". (e.g., <em>isla</em>)</li>
            <li><strong>J (jota)</strong>: Raspy 'h' sound, similar to 'g' before 'e' or 'i', but used before any vowel. (e.g., <em>jirafa</em>, <em>jugar</em>)</li>
            <li><strong>K (ka)</strong>: Like English 'k' (only in loanwords). (e.g., <em>kilo</em>)</li>
            <li><strong>L (ele)</strong>: Like English 'l'. (e.g., <em>luna</em>)</li>
            <li><strong>LL (elle)</strong>: Like 'y' in "yes" (in most regions), or 'j' in "jump" (in parts of Argentina/Uruguay). (e.g., <em>lluvia</em>, <em>calle</em>)</li>
            <li><strong>M (eme)</strong>: Like English 'm'. (e.g., <em>madre</em>)</li>
            <li><strong>N (ene)</strong>: Like English 'n'. (e.g., <em>noche</em>)</li>
            <li><strong>Ñ (eñe)</strong>: Like 'ny' in "canyon". (e.g., <em>niño</em>, <em>mañana</em>)</li>
            <li><strong>O (o)</strong>: Like 'o' in "more". (e.g., <em>oso</em>)</li>
            <li><strong>P (pe)</strong>: Like English 'p' but without the puff of air. (e.g., <em>perro</em>)</li>
            <li><strong>Q (cu)</strong>: Always followed by a silent 'u'. Sounds like 'k'. Only used with 'e' and 'i' (que, qui). (e.g., <em>queso</em>, <em>quince</em>)</li>
            <li><strong>R (ere)</strong>: A single flap of the tongue against the alveolar ridge (like 'tt' in "butter"). (e.g., <em>cara</em>)</li>
            <li><strong>RR (erre)</strong>: A trilled/rolled 'r'. Used when 'r' is at the beginning of a word, or when written as 'rr' between vowels. (e.g., <em>perro</em>, <em>rojo</em>)</li>
            <li><strong>S (ese)</strong>: Like English 's'. (e.g., <em>sol</em>)</li>
            <li><strong>T (te)</strong>: Like English 't' but tongue touches the back of the upper teeth, no puff of air. (e.g., <em>taza</em>)</li>
            <li><strong>U (u)</strong>: Like 'oo' in "boot". (e.g., <em>uva</em>)</li>
            <li><strong>V (uve)</strong>: Pronounced exactly the same as 'b' in Spanish. (e.g., <em>vaca</em>, <em>vivir</em>)</li>
            <li><strong>W (uve doble)</strong>: Like 'w' in "water" (only in loanwords). (e.g., <em>wifi</em>)</li>
            <li><strong>X (equis)</strong>: Like 'ks' between vowels (éxito). Sometimes like 's' at the beginning of words. In Mexican place names (México, Oaxaca), it sounds like 'j'.</li>
            <li><strong>Y (i griega)</strong>: Like 'y' in "yes" as a consonant. Like 'ee' as a vowel (at the end of words like <em>hoy</em>). (e.g., <em>ya</em>, <em>rey</em>)</li>
            <li><strong>Z (zeta)</strong>: Like 's' in Latin America, like 'th' in Spain. (e.g., <em>zapato</em>)</li>
          </ul>
        `
      },
      {
        id: "1-2",
        title: "1.2 Syllable Stress Rules (Acentuación)",
        html: `
          <ol>
            <li><strong>Rule 1</strong>: If a word ends in a <strong>vowel, 'n', or 's'</strong>, the stress falls on the <strong>second-to-last</strong> syllable. (e.g., <em>MESA</em> &rarr; ME-sa, <em>JOVEN</em> &rarr; JO-ven, <em>ZAPATOS</em> &rarr; za-PA-tos).</li>
            <li><strong>Rule 2</strong>: If a word ends in any <strong>consonant other than 'n' or 's'</strong>, the stress falls on the <strong>last</strong> syllable. (e.g., <em>PAPEL</em> &rarr; pa-PEL, <em>CIUDAD</em> &rarr; ciu-DAD).</li>
            <li><strong>Rule 3</strong>: If a word breaks Rule 1 or Rule 2, it MUST have a written accent mark (tilde) over the stressed vowel. (e.g., <em>LÁPIZ</em> &rarr; LA-piz, <em>CANCIÓN</em> &rarr; can-CIÓN).</li>
          </ol>
        `
      },
      {
        id: "1-3",
        title: "1.3 Essential Vocabulary & Courtesies",
        html: `
          <h4>Greetings & Farewells</h4>
          <ul>
            <li><em>&iexcl;Hola!</em> (Hello)</li>
            <li><em>Buenos d&iacute;as</em> (Good morning - until roughly 12-2 PM)</li>
            <li><em>Buenas tardes</em> (Good afternoon - until dusk)</li>
            <li><em>Buenas noches</em> (Good evening / Good night)</li>
            <li><em>Adi&oacute;s</em> (Goodbye)</li>
            <li><em>Hasta luego</em> (See you later)</li>
            <li><em>Hasta pronto</em> (See you soon)</li>
            <li><em>Hasta ma&ntilde;ana</em> (See you tomorrow)</li>
            <li><em>Nos vemos</em> (We'll see each other)</li>
            <li><em>&iquest;Qu&eacute; tal?</em> (What's up? / How's it going?)</li>
          </ul>
          <h4>Politeness</h4>
          <ul>
            <li><em>Por favor</em> (Please)</li>
            <li><em>Gracias / Muchas gracias</em> (Thank you / Thank you very much)</li>
            <li><em>De nada / No hay de qu&eacute;</em> (You're welcome)</li>
            <li><em>Con permiso</em> (Excuse me - to pass someone)</li>
            <li><em>Disculpe / Perd&oacute;n</em> (Excuse me - to get attention or apologize)</li>
            <li><em>Lo siento</em> (I'm sorry)</li>
            <li><em>&iexcl;Salud!</em> (Bless you - after a sneeze, or Cheers)</li>
          </ul>
          <h4>Days of the Week (Los d&iacute;as de la semana)</h4>
          <p class="note">Note: Days are not capitalized in Spanish.</p>
          <p>lunes (Monday), martes (Tuesday), mi&eacute;rcoles (Wednesday), jueves (Thursday), viernes (Friday), s&aacute;bado (Saturday), domingo (Sunday).</p>
          <h4>Months (Los meses del a&ntilde;o)</h4>
          <p class="note">Not capitalized.</p>
          <p>enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre.</p>
        `
      },
      {
        id: "1-4",
        title: "1.4 Numbers 0-100+",
        html: `
          <ul>
            <li><strong>0-9</strong>: cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve.</li>
            <li><strong>10-15</strong>: diez, once, doce, trece, catorce, quince.</li>
            <li><strong>16-19</strong>: dieciséis, diecisiete, dieciocho, diecinueve.</li>
            <li><strong>20-29</strong>: veinte, veintiuno, veintidós, veintitrés, veinticuatro...</li>
            <li><strong>30-39</strong>: treinta, treinta y uno, treinta y dos...</li>
            <li><strong>Tens</strong>: 40 (cuarenta), 50 (cincuenta), 60 (sesenta), 70 (setenta), 80 (ochenta), 90 (noventa).</li>
            <li><strong>Hundreds</strong>: 100 (cien/ciento), 200 (doscientos), 300 (trescientos), 400 (cuatrocientos), 500 (quinientos), 600 (seiscientos), 700 (setecientos), 800 (ochocientos), 900 (novecientos).</li>
            <li><strong>1000</strong>: mil</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "part-2",
    title: "PART 2: Nouns, Articles, and Adjectives",
    sections: [
      {
        id: "2-1",
        title: "2.1 Gender of Nouns: Deep Dive",
        html: `
          <p>All nouns in Spanish have a gender: masculine or feminine.</p>
          <h4>Typically Masculine</h4>
          <ul>
            <li>Ends in <strong>-o</strong>: <em>el libro</em> (book), <em>el cuarto</em> (room).</li>
            <li>Ends in <strong>-or</strong>, <strong>-aje</strong>, <strong>-ma</strong> (of Greek origin): <em>el color</em>, <em>el viaje</em>, <em>el problema</em>, <em>el sistema</em>, <em>el idioma</em>.</li>
            <li>Days, months, rivers, oceans.</li>
          </ul>
          <h4>Typically Feminine</h4>
          <ul>
            <li>Ends in <strong>-a</strong>: <em>la mesa</em> (table), <em>la casa</em> (house).</li>
            <li>Ends in <strong>-ción</strong>, <strong>-sión</strong>, <strong>-dad</strong>, <strong>-tad</strong>, <strong>-tud</strong>, <strong>-umbre</strong>: <em>la canción</em> (song), <em>la televisión</em>, <em>la ciudad</em> (city), <em>la libertad</em> (freedom), <em>la juventud</em> (youth), <em>la costumbre</em> (custom).</li>
          </ul>
          <h4>Notable Exceptions</h4>
          <ul>
            <li><em>La mano</em> (hand - feminine despite ending in -o)</li>
            <li><em>La radio</em> (radio - feminine)</li>
            <li><em>El d&iacute;a</em> (day - masculine despite ending in -a)</li>
            <li><em>El mapa</em> (map - masculine)</li>
            <li><em>El agua</em> (water - feminine, but uses 'el' in singular to avoid "la a..." sound clashing).</li>
          </ul>
        `
      },
      {
        id: "2-2",
        title: "2.2 Pluralization Rules",
        html: `
          <ol>
            <li>Ends in a vowel: Add <strong>-s</strong>. (<em>libro &rarr; libros</em>)</li>
            <li>Ends in a consonant: Add <strong>-es</strong>. (<em>papel &rarr; papeles</em>)</li>
            <li>Ends in <strong>-z</strong>: Change 'z' to 'c' and add <strong>-es</strong>. (<em>lápiz &rarr; lápices</em>, <em>luz &rarr; luces</em>)</li>
            <li>Adding/removing accents: Sometimes pluralization changes the syllable count, requiring adding or removing a tilde to maintain the stress rule. (<em>joven &rarr; jóvenes</em>, <em>canción &rarr; canciones</em>).</li>
          </ol>
        `
      },
      {
        id: "2-3",
        title: "2.3 Articles",
        html: `
          <h4>Definite Articles (The)</h4>
          <ul>
            <li>Masculine Singular: <strong>el</strong> (<em>el perro</em>)</li>
            <li>Feminine Singular: <strong>la</strong> (<em>la casa</em>)</li>
            <li>Masculine Plural: <strong>los</strong> (<em>los perros</em>)</li>
            <li>Feminine Plural: <strong>las</strong> (<em>las casas</em>)</li>
          </ul>
          <h4>Indefinite Articles (A / An / Some)</h4>
          <ul>
            <li>Masculine Singular: <strong>un</strong> (<em>un coche</em>)</li>
            <li>Feminine Singular: <strong>una</strong> (<em>una manzana</em>)</li>
            <li>Masculine Plural: <strong>unos</strong> (<em>unos coches</em> - some cars)</li>
            <li>Feminine Plural: <strong>unas</strong> (<em>unas manzanas</em> - some apples)</li>
          </ul>
        `
      },
      {
        id: "2-4",
        title: "2.4 Adjectives",
        html: `
          <p>Adjectives must agree in both <strong>gender</strong> and <strong>number</strong> with the noun they modify. They generally follow the noun.</p>
          <ul>
            <li><em>El chico alto</em> (The tall boy)</li>
            <li><em>La chica alta</em> (The tall girl)</li>
            <li><em>Los chicos altos</em> (The tall boys)</li>
            <li><em>Las chicas altas</em> (The tall girls)</li>
          </ul>
          <h4>Adjectives ending in -e or a consonant</h4>
          <p>These only change for number, not gender.</p>
          <ul>
            <li><em>El libro interesante</em> / <em>La clase interesante</em></li>
            <li><em>El hombre feliz</em> / <em>La mujer feliz</em></li>
          </ul>
        `
      }
    ]
  },
  {
    id: "part-3",
    title: "PART 3: Pronouns",
    sections: [
      {
        id: "3-1",
        title: "3.1 Subject Pronouns",
        html: `
          <ul>
            <li><strong>Yo</strong> (I)</li>
            <li><strong>T&uacute;</strong> (You - informal singular)</li>
            <li><strong>&Eacute;l</strong> (He), <strong>Ella</strong> (She), <strong>Usted (Ud.)</strong> (You - formal singular)</li>
            <li><strong>Nosotros / Nosotras</strong> (We - masculine/mixed / feminine)</li>
            <li><strong>Vosotros / Vosotras</strong> (You all - informal Spain)</li>
            <li><strong>Ellos</strong> (They - masculine/mixed), <strong>Ellas</strong> (They - feminine), <strong>Ustedes (Uds.)</strong> (You all - formal Spain, all of Latin America)</li>
          </ul>
        `
      },
      {
        id: "3-2",
        title: "3.2 Direct Object Pronouns (DOPs)",
        html: `
          <p>DOPs answer "whom" or "what" receives the action of the verb.</p>
          <ul>
            <li><strong>me</strong> (me)</li>
            <li><strong>te</strong> (you)</li>
            <li><strong>lo</strong> (him, it, you formal masc.)</li>
            <li><strong>la</strong> (her, it, you formal fem.)</li>
            <li><strong>nos</strong> (us)</li>
            <li><strong>os</strong> (you all - Spain)</li>
            <li><strong>los</strong> (them, you all masc.)</li>
            <li><strong>las</strong> (them, you all fem.)</li>
          </ul>
          <p><em>Placement:</em> Before the conjugated verb, or attached to an infinitive or gerund.</p>
          <ul>
            <li><em>Yo veo el libro.</em> &rarr; <em>Yo <strong>lo</strong> veo.</em> (I see it).</li>
            <li><em>Quiero comer la manzana.</em> &rarr; <em>Quiero comer<strong>la</strong>.</em> OR <em>La quiero comer.</em></li>
          </ul>
        `
      },
      {
        id: "3-3",
        title: "3.3 Indirect Object Pronouns (IOPs)",
        html: `
          <p>IOPs answer "to whom" or "for whom" an action is performed.</p>
          <ul>
            <li><strong>me</strong> (to/for me)</li>
            <li><strong>te</strong> (to/for you)</li>
            <li><strong>le</strong> (to/for him, her, you formal)</li>
            <li><strong>nos</strong> (to/for us)</li>
            <li><strong>os</strong> (to/for you all - Spain)</li>
            <li><strong>les</strong> (to/for them, you all)</li>
          </ul>
          <p><em>Example:</em></p>
          <ul>
            <li><em>Yo <strong>le</strong> doy un regalo (a Juan).</em> - I give a gift to him (Juan).</li>
          </ul>
        `
      },
      {
        id: "3-4",
        title: "3.4 Double Object Pronouns",
        html: `
          <p>When using both an IOP and a DOP in the same sentence, the IOP comes first.</p>
          <p><strong>Rule:</strong> IOP + DOP + Verb.</p>
          <p><strong>Special "Se" Rule:</strong> If you have 'le' or 'les' followed by 'lo', 'la', 'los', or 'las', the 'le/les' changes to <strong>se</strong> to avoid the clumsy "le lo" sound.</p>
          <ul>
            <li><em>Yo doy el regalo a Juan.</em></li>
            <li>DOP = lo (el regalo). IOP = le (a Juan).</li>
            <li><em>Yo le lo doy.</em> (INCORRECT) &rarr; <em>Yo <strong>se lo</strong> doy.</em> (CORRECT: I give it to him).</li>
          </ul>
        `
      },
      {
        id: "3-5",
        title: "3.5 Prepositional Pronouns",
        html: `
          <p>Used after prepositions (para, por, a, de, en, con).</p>
          <ul>
            <li><strong>m&iacute;</strong> (me) - Note the accent!</li>
            <li><strong>ti</strong> (you)</li>
            <li>&eacute;l, ella, usted, nosotros, vosotros, ellos, ellas, ustedes (same as subject pronouns).</li>
          </ul>
          <p><em>Exceptions with 'con' (with):</em></p>
          <ul>
            <li>con + m&iacute; = <strong>conmigo</strong> (with me)</li>
            <li>con + ti = <strong>contigo</strong> (with you)</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "part-4",
    title: "PART 4: The Present Tense & Verb Mechanics",
    sections: [
      {
        id: "4-1",
        title: "4.1 Regular Verbs",
        html: `
          <p>Verbs consist of a stem and an ending (-ar, -er, -ir).</p>
          <div class="table-wrap">
            <table>
              <thead>
                <tr><th>Pronoun</th><th>-AR (Hablar - to speak)</th><th>-ER (Comer - to eat)</th><th>-IR (Vivir - to live)</th></tr>
              </thead>
              <tbody>
                <tr><td>Yo</td><td>habl<strong>o</strong></td><td>com<strong>o</strong></td><td>viv<strong>o</strong></td></tr>
                <tr><td>T&uacute;</td><td>habl<strong>as</strong></td><td>com<strong>es</strong></td><td>viv<strong>es</strong></td></tr>
                <tr><td>&Eacute;l/Ella/Ud.</td><td>habl<strong>a</strong></td><td>com<strong>e</strong></td><td>viv<strong>e</strong></td></tr>
                <tr><td>Nosotros</td><td>habl<strong>amos</strong></td><td>com<strong>emos</strong></td><td>viv<strong>imos</strong></td></tr>
                <tr><td>Vosotros</td><td>habl<strong>áis</strong></td><td>com<strong>éis</strong></td><td>viv<strong>ís</strong></td></tr>
                <tr><td>Ellos/Uds.</td><td>habl<strong>an</strong></td><td>com<strong>en</strong></td><td>viv<strong>en</strong></td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "4-2",
        title: "4.2 Ser vs. Estar (The \"To Be\" Verbs)",
        html: `
          <h4>SER (Permanent/Essence)</h4>
          <p>Conjugation: <em>soy, eres, es, somos, sois, son</em></p>
          <p><strong>D.O.C.T.O.R.</strong></p>
          <ul>
            <li><strong>D</strong>escription: <em>El chico es alto.</em></li>
            <li><strong>O</strong>ccupation: <em>Soy profesora.</em></li>
            <li><strong>C</strong>haracteristic: <em>El hielo es fr&iacute;o.</em></li>
            <li><strong>T</strong>ime/Date: <em>Son las dos. Es lunes.</em></li>
            <li><strong>O</strong>rigin: <em>Eres de M&eacute;xico.</em></li>
            <li><strong>R</strong>elationship: <em>Es mi hermano.</em></li>
          </ul>
          <h4>ESTAR (Temporary/State)</h4>
          <p>Conjugation: <em>estoy, est&aacute;s, est&aacute;, estamos, est&aacute;is, est&aacute;n</em></p>
          <p><strong>P.L.A.C.E.</strong></p>
          <ul>
            <li><strong>P</strong>osition: <em>El libro est&aacute; en la mesa.</em></li>
            <li><strong>L</strong>ocation: <em>Estamos en la ciudad.</em></li>
            <li><strong>A</strong>ction (Present Progressive): <em>Estoy comiendo.</em></li>
            <li><strong>C</strong>ondition: <em>El caf&eacute; est&aacute; fr&iacute;o.</em> (right now)</li>
            <li><strong>E</strong>motion: <em>Est&aacute;s triste.</em></li>
          </ul>
        `
      },
      {
        id: "4-3",
        title: "4.3 Stem-Changing Verbs (Boot Verbs)",
        html: `
          <p>In the present tense, some verbs undergo a vowel change in the stem for all forms EXCEPT nosotros and vosotros (creating a "boot" shape on a conjugation table).</p>
          <h4>e &rarr; ie (e.g., Pensar - to think)</h4>
          <p><em>pienso, piensas, piensa, pensamos, pens&aacute;is, piensan</em></p>
          <p>Others: Querer, Cerrar, Empezar, Entender.</p>
          <h4>o &rarr; ue (e.g., Poder - to be able to / can)</h4>
          <p><em>puedo, puedes, puede, podemos, pod&eacute;is, pueden</em></p>
          <p>Others: Dormir, Encontrar, Volver, Almorzar.</p>
          <h4>e &rarr; i (e.g., Pedir - to ask for / order)</h4>
          <p><em>pido, pides, pide, pedimos, ped&iacute;s, piden</em></p>
          <p>Others: Servir, Repetir, Vestir.</p>
        `
      },
      {
        id: "4-4",
        title: "4.4 Irregular \"Yo\" Form Verbs",
        html: `
          <p>Many verbs are completely regular except for the "Yo" form.</p>
          <ul>
            <li><strong>Hacer</strong> (to do/make) &rarr; <em>hago</em> (haces, hace...)</li>
            <li><strong>Poner</strong> (to put/place) &rarr; <em>pongo</em></li>
            <li><strong>Salir</strong> (to leave/go out) &rarr; <em>salgo</em></li>
            <li><strong>Traer</strong> (to bring) &rarr; <em>traigo</em></li>
            <li><strong>Conocer</strong> (to know a person/place) &rarr; <em>conozco</em></li>
            <li><strong>Saber</strong> (to know facts/how to) &rarr; <em>s&eacute;</em></li>
            <li><strong>Ver</strong> (to see) &rarr; <em>veo</em></li>
            <li><strong>Dar</strong> (to give) &rarr; <em>doy</em></li>
          </ul>
        `
      },
      {
        id: "4-5",
        title: "4.5 Reflexive Verbs",
        html: `
          <p>Reflexive verbs indicate the subject is performing the action <em>on itself</em> (e.g., I wash myself). They end in <strong>-se</strong> in the infinitive.</p>
          <p><strong>Reflexive Pronouns</strong>: me, te, se, nos, os, se.</p>
          <p><em>Example: Lavarse (to wash oneself)</em></p>
          <ul>
            <li>Yo <strong>me lavo</strong></li>
            <li>T&uacute; <strong>te lavas</strong></li>
            <li>&Eacute;l/Ella/Ud. <strong>se lava</strong></li>
            <li>Nosotros <strong>nos lavamos</strong></li>
            <li>Vosotros <strong>os lav&aacute;is</strong></li>
            <li>Ellos/Uds. <strong>se lavan</strong></li>
          </ul>
        `
      }
    ]
  },
  {
    id: "part-5",
    title: "PART 5: The Past Tenses",
    sections: [
      {
        id: "5-1",
        title: "5.1 The Preterite (El Pretérito)",
        html: `
          <p>Used for completed actions, specific events, and actions that interrupt another action. Think of it as a snapshot.</p>
          <h4>Regular Endings</h4>
          <ul>
            <li><strong>-AR</strong>: -é, -aste, -ó, -amos, -asteis, -aron</li>
            <li><strong>-ER/-IR</strong>: -í, -iste, -ió, -imos, -isteis, -ieron</li>
          </ul>
          <h4>Spelling Changes in "Yo" form (-car, -gar, -zar)</h4>
          <p>To preserve pronunciation:</p>
          <ul>
            <li><em>Buscar</em> &rarr; yo bus<strong>qu</strong>é</li>
            <li><em>Llegar</em> &rarr; yo lle<strong>gu</strong>é</li>
            <li><em>Empezar</em> &rarr; yo empe<strong>c</strong>é</li>
          </ul>
          <h4>Radical Irregulars</h4>
          <p>These have a completely new stem and share specific irregular endings: <em>-e, -iste, -o, -imos, -isteis, -ieron</em> (no accents!).</p>
          <ul>
            <li>Tener &rarr; <strong>tuv-</strong> (tuve, tuviste, tuvo...)</li>
            <li>Estar &rarr; <strong>estuv-</strong></li>
            <li>Hacer &rarr; <strong>hic-</strong> (hizo in él/ella to keep 's' sound)</li>
            <li>Poder &rarr; <strong>pud-</strong></li>
            <li>Poner &rarr; <strong>pus-</strong></li>
            <li>Decir &rarr; <strong>dij-</strong> (ellos = dijeron)</li>
            <li>Traer &rarr; <strong>traj-</strong> (ellos = trajeron)</li>
            <li>Ser / Ir (Identical) &rarr; <strong>fui, fuiste, fue, fuimos, fuisteis, fueron</strong></li>
          </ul>
        `
      },
      {
        id: "5-2",
        title: "5.2 The Imperfect (El Imperfecto)",
        html: `
          <p>Used for descriptions in the past, ongoing actions with no definite beginning/end, habits, time, age, and weather. Think of it as a video recording.</p>
          <h4>Regular Endings</h4>
          <ul>
            <li><strong>-AR</strong>: -aba, -abas, -aba, -ábamos, -abais, -aban (<em>hablaba</em>)</li>
            <li><strong>-ER/-IR</strong>: -ía, -ías, -ía, -íamos, -íais, -ían (<em>comía</em>)</li>
          </ul>
          <h4>Only 3 Irregulars</h4>
          <ul>
            <li><strong>Ser</strong> (to be): era, eras, era, éramos, erais, eran</li>
            <li><strong>Ir</strong> (to go): iba, ibas, iba, íbamos, ibais, iban</li>
            <li><strong>Ver</strong> (to see): veía, veías, veía, veíamos, veíais, veían</li>
          </ul>
          <h4>Preterite vs. Imperfect Examples</h4>
          <ul>
            <li><em>Cuando <strong>era</strong> niño, siempre <strong>jugaba</strong> en el parque.</em> (Imperfect - habitual)</li>
            <li><em>Ayer, <strong>jugué</strong> en el parque.</em> (Preterite - one time, completed)</li>
            <li><em>Yo <strong>leía</strong></em> (Imperfect - ongoing) <em>cuando el tel&eacute;fono <strong>sonó</strong></em> (Preterite - interrupting action).</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "part-6",
    title: "PART 6: Future and Conditional",
    sections: [
      {
        id: "6-1",
        title: "6.1 The Simple Future",
        html: `
          <p>Used to say what <em>will</em> happen. The endings are attached to the <strong>infinitive</strong>, not the stem.</p>
          <p><strong>Endings (Same for all verbs):</strong> -é, -ás, -á, -emos, -éis, -án</p>
          <ul>
            <li>Hablar &rarr; <em>hablaré, hablarás, hablará...</em></li>
            <li>Comer &rarr; <em>comeré...</em></li>
            <li>Vivir &rarr; <em>viviré...</em></li>
          </ul>
        `
      },
      {
        id: "6-2",
        title: "6.2 The Conditional",
        html: `
          <p>Used to say what <em>would</em> happen, often for hypotheticals or polite requests. Endings attached to the infinitive.</p>
          <p><strong>Endings (Same for all verbs):</strong> -ía, -ías, -ía, -íamos, -íais, -ían</p>
          <ul>
            <li>Hablar &rarr; <em>hablaría, hablarías...</em></li>
            <li>Comer &rarr; <em>comería...</em></li>
          </ul>
          <h4>Shared Irregular Stems for Future & Conditional</h4>
          <p>You use these stems instead of the infinitive, but apply the same endings.</p>
          <ul>
            <li>Tener &rarr; <strong>tendr-</strong> (tendré, tendría)</li>
            <li>Poner &rarr; <strong>pondr-</strong></li>
            <li>Salir &rarr; <strong>saldr-</strong></li>
            <li>Venir &rarr; <strong>vendr-</strong></li>
            <li>Hacer &rarr; <strong>har-</strong></li>
            <li>Decir &rarr; <strong>dir-</strong></li>
            <li>Poder &rarr; <strong>podr-</strong></li>
            <li>Saber &rarr; <strong>sabr-</strong></li>
            <li>Querer &rarr; <strong>querr-</strong></li>
          </ul>
        `
      }
    ]
  },
  {
    id: "part-7",
    title: "PART 7: Imperative (Commands)",
    sections: [
      {
        id: "7-1",
        title: "7.1 Tú Commands (Informal)",
        html: `
          <p><strong>Affirmative (Do it!):</strong> Use the él/ella/Ud. form of the present tense.</p>
          <ul>
            <li>Hablar &rarr; &iexcl;<strong>Habla</strong>! (Speak!)</li>
            <li>Comer &rarr; &iexcl;<strong>Come</strong>! (Eat!)</li>
            <li><em>Irregulars</em>: Ven, Di, Sal, Haz, Ten, Ve, Pon, S&eacute; (Vin Diesel has ten weapons).</li>
          </ul>
          <p><strong>Negative (Don't do it!):</strong> Take the 'yo' form present, drop the 'o', add opposite vowel + s.</p>
          <ul>
            <li>Hablar &rarr; (hablo) &rarr; &iexcl;<strong>No hables</strong>!</li>
            <li>Comer &rarr; (como) &rarr; &iexcl;<strong>No comas</strong>!</li>
            <li><em>Irregulars</em>: No seas (ser), no vayas (ir), no des (dar), no estés (estar), no sepas (saber).</li>
          </ul>
        `
      },
      {
        id: "7-2",
        title: "7.2 Usted/Ustedes Commands (Formal)",
        html: `
          <p>To command people you use "usted" with.</p>
          <p>Take the 'yo' form present, drop the 'o', add opposite vowel (add 'n' for ustedes).</p>
          <ul>
            <li>Hablar &rarr; <strong>Hable / Hablen</strong> (No hable / No hablen)</li>
            <li>Comer &rarr; <strong>Coma / Coman</strong> (No coma / No coman)</li>
            <li>Tener &rarr; <strong>Tenga / Tengan</strong> (No tenga / No tengan)</li>
          </ul>
        `
      },
      {
        id: "7-3",
        title: "7.3 Pronoun Placement with Commands",
        html: `
          <ul>
            <li><strong>Affirmative Commands</strong>: Attach pronouns to the END. Add an accent to maintain stress. (<em>&iexcl;D&iacute;melo!</em> - Tell it to me!)</li>
            <li><strong>Negative Commands</strong>: Pronouns go BEFORE the verb. (<em>&iexcl;No me lo digas!</em> - Don't tell it to me!)</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "part-8",
    title: "PART 8: Introduction to the Subjunctive Mood",
    sections: [
      {
        id: "8-intro",
        title: "Overview",
        html: `
          <p>The subjunctive is a mood used to express uncertainty, subjectivity, emotion, desire, and unreality. It almost always occurs in a dependent clause introduced by <strong>que</strong> (that).</p>
        `
      },
      {
        id: "8-1",
        title: "8.1 Triggers for the Subjunctive (W.E.I.R.D.O.)",
        html: `
          <ul>
            <li><strong>W</strong>ishes/Desires: <em>Quiero que, Deseo que, Espero que...</em></li>
            <li><strong>E</strong>motions: <em>Me alegro de que, Siento que, Temo que...</em></li>
            <li><strong>I</strong>mpersonal Expressions: <em>Es importante que, Es necesario que, Es posible que...</em></li>
            <li><strong>R</strong>ecommendations: <em>Recomiendo que, Sugiero que, Pido que...</em></li>
            <li><strong>D</strong>oubt/Denial: <em>Dudo que, No creo que, No pienso que...</em></li>
            <li><strong>O</strong>jalá: <em>&iexcl;Ojalá que...!</em> (God willing / I strongly hope that...)</li>
          </ul>
          <h4>Formula</h4>
          <p>[Subject 1 + WEIRDO Verb] + <strong>QUE</strong> + [Subject 2 + Subjunctive Verb]</p>
          <ul>
            <li><em>Yo quiero que t&uacute; estudies.</em> (I want you to study.)</li>
          </ul>
        `
      },
      {
        id: "8-2",
        title: "8.2 Forming the Present Subjunctive",
        html: `
          <ol>
            <li>Start with the 'Yo' form of the present indicative (<em>hablo</em>, <em>tengo</em>).</li>
            <li>Drop the '-o' (<em>habl-</em>, <em>teng-</em>).</li>
            <li>Add the "opposite" endings:
              <ul>
                <li><strong>-AR Verbs</strong>: -e, -es, -e, -emos, -éis, -en (<em>hable, hables...</em>)</li>
                <li><strong>-ER/-IR Verbs</strong>: -a, -as, -a, -amos, -áis, -an (<em>tenga, tengas...</em>)</li>
              </ul>
            </li>
          </ol>
          <p class="note">Note: Stem changes and 'yo' irregulars from the indicative carry over!</p>
          <ul>
            <li>Pensar &rarr; <em>piense</em></li>
            <li>Hacer &rarr; <em>haga</em></li>
          </ul>
        `
      },
      {
        id: "8-3",
        title: "8.3 Irregular Subjunctive Verbs (D.I.S.H.E.S.)",
        html: `
          <ul>
            <li><strong>D</strong>ar: dé, des, dé, demos, deis, den</li>
            <li><strong>I</strong>r: vaya, vayas, vaya, vayamos, vayáis, vayan</li>
            <li><strong>S</strong>er: sea, seas, sea, seamos, seáis, sean</li>
            <li><strong>H</strong>aber: haya, hayas, haya, hayamos, hayáis, hayan</li>
            <li><strong>E</strong>star: esté, estés, esté, estemos, estéis, estén</li>
            <li><strong>S</strong>aber: sepa, sepas, sepa, sepamos, sepáis, sepan</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "part-9",
    title: "PART 9: Crucial Prepositions (Por vs. Para)",
    sections: [
      {
        id: "9-intro",
        title: "Overview",
        html: `<p>These both mean "for", but represent entirely different concepts.</p>`
      },
      {
        id: "9-1",
        title: "9.1 PARA (Destination / Perfect)",
        html: `
          <p>Think of an arrow hitting a target.</p>
          <ul>
            <li><strong>P</strong>urpose/Goal: <em>Estudio para ser médico.</em> (in order to)</li>
            <li><strong>E</strong>xact Date/Deadline: <em>La tarea es para mañana.</em></li>
            <li><strong>R</strong>ecipient: <em>Este regalo es para ti.</em></li>
            <li><strong>F</strong>uture Destination: <em>Salimos para Madrid.</em></li>
            <li><strong>E</strong>mployment: <em>Trabajo para Google.</em></li>
            <li><strong>C</strong>omparison: <em>Para ser niño, lee muy bien.</em></li>
            <li><strong>T</strong>oward a point: (Destination).</li>
          </ul>
        `
      },
      {
        id: "9-2",
        title: "9.2 POR (Motion / Exchange / Reason)",
        html: `
          <p>Think of moving through something, or a scale balancing.</p>
          <ul>
            <li><strong>A</strong>round a place/Through: <em>Caminamos por el parque.</em></li>
            <li><strong>T</strong>hrough a means: <em>Hablamos por teléfono.</em></li>
            <li><strong>R</strong>eason/Motive: <em>Llegué tarde por el tráfico.</em> (because of)</li>
            <li><strong>A</strong>fter (going to get): <em>Voy a la tienda por leche.</em></li>
            <li><strong>C</strong>ost/Exchange: <em>Pagué 20 euros por la camisa.</em></li>
            <li><strong>T</strong>hanks: <em>Gracias por tu ayuda.</em></li>
            <li><strong>E</strong>xtent of time: <em>Estudié por tres horas.</em></li>
            <li><strong>D</strong>uration.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "part-10",
    title: "PART 10: Demonstratives and Possessives",
    sections: [
      {
        id: "10-1",
        title: "10.1 Demonstrative Adjectives (This, That, Those)",
        html: `
          <p>Must agree in gender and number with the noun they point to.</p>
          <div class="table-wrap">
            <table>
              <thead>
                <tr><th>Distance</th><th>Masculine Singular</th><th>Feminine Singular</th><th>Masculine Plural</th><th>Feminine Plural</th></tr>
              </thead>
              <tbody>
                <tr><td>Close (This/These)</td><td>este</td><td>esta</td><td>estos</td><td>estas</td></tr>
                <tr><td>Middle (That/Those)</td><td>ese</td><td>esa</td><td>esos</td><td>esas</td></tr>
                <tr><td>Far (That over there)</td><td>aquel</td><td>aquella</td><td>aquellos</td><td>aquellas</td></tr>
              </tbody>
            </table>
          </div>
          <p class="note"><em>Rhyme to remember:</em> "This and these keep the T's. That and those, no T goes."</p>
        `
      },
      {
        id: "10-2",
        title: "10.2 Possessive Adjectives (Short Form)",
        html: `
          <p>Must agree in number (and sometimes gender) with the <strong>noun possessed</strong>, not the owner.</p>
          <ul>
            <li><strong>mi / mis</strong>: my</li>
            <li><strong>tu / tus</strong>: your (informal)</li>
            <li><strong>su / sus</strong>: his, her, its, your (formal), their</li>
            <li><strong>nuestro/a/os/as</strong>: our</li>
            <li><strong>vuestro/a/os/as</strong>: your all's (Spain)</li>
          </ul>
          <p><em>Example:</em> <em>Nuestra casa</em> (Our house - 'nuestra' is feminine singular because 'casa' is feminine singular, regardless of who "we" are).</p>
        `
      }
    ]
  }
];

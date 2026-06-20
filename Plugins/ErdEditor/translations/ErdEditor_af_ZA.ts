<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="af" sourcelanguage="en">
<context>
    <name>ErdChangeRegistryDialog</name>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="14"/>
        <source>Pending changes registry</source>
        <translation>Register van hangende veranderinge</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="65"/>
        <source>Pending changes</source>
        <translation>Hangende veranderinge</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="105"/>
        <source>DDL preview</source>
        <translation>DDL-voorskou</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="143"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Shows the changes as they will be committed. Redundant or mutually cancelling steps are merged or removed from the list.&lt;br/&gt;When disabled, all individual undo and redo steps are shown.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Wys die veranderinge soos hulle vasgelê sal word. Oorbodige stappe of stappe wat mekaar kanselleer, word saamgevoeg of uit die lys verwyder.&lt;br/&gt;Wanneer gedeaktiveer, word alle individuele ontdoen- en herdoen-stappe gewys.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="146"/>
        <source>Show effective changes only</source>
        <translation>Wys slegs effektiewe veranderinge</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="153"/>
        <source>&lt;html&gt;&lt;body&gt;Shows changes that do not modify the database schema, but only affect the diagram (for example, table position changes). &lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;body&gt;Wys veranderinge wat nie die databasisskema wysig nie, maar slegs die diagram beïnvloed (byvoorbeeld veranderinge aan tabelposisies). &lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="156"/>
        <source>Show non-schema changes</source>
        <translation>Wys nie-skema-veranderinge</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.cpp" line="58"/>
        <source>-- This is a change applied only to the diagram. It has no database schema efects.</source>
        <comment>ERD editor</comment>
        <translation>-- Dit is ’n verandering wat slegs op die diagram toegepas word. Dit het geen effek op die databasisskema nie.</translation>
    </message>
</context>
<context>
    <name>ErdConfig</name>
    <message>
        <location filename="../erdconfig.ui" line="33"/>
        <source>Maximum number of tables for ERD editor</source>
        <translation>Maksimum aantal tabelle vir die ERD-redigeerder</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="40"/>
        <source>Setting this value too high may cause the application to slow down or become unresponsive when opening the ERD editor.</source>
        <translation>As hierdie waarde te hoog gestel word, kan dit veroorsaak dat die toepassing stadiger word of nie reageer wanneer die ERD-redigeerder oopgemaak word nie.</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="56"/>
        <source>Starts panning as soon as the Space key is pressed, without requiring a mouse button press.</source>
        <translation>Begin panning sodra die Spasiebalk gedruk word, sonder dat ’n muisknoppie gedruk hoef te word.</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="59"/>
        <source>Pan view with Space only</source>
        <translation>Pan aansig slegs met Spasie</translation>
    </message>
</context>
<context>
    <name>ErdConnectionPanel</name>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="59"/>
        <source>Foreign key properties</source>
        <translation>Vreemde-sleutel-eienskappe</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="83"/>
        <source>Composite relation (multiple columns)</source>
        <translation>Saamgestelde verhouding (veelvuldige kolomme)</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="137"/>
        <source>Referencing (child) table:</source>
        <translation>Verwysende (kind) tabel:</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="156"/>
        <source>Referencing (child) column:</source>
        <translation>Verwysende (kind) kolom:</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="51"/>
        <source>ERD side panel for relation between tables &quot;%1&quot; and &quot;%2&quot; has uncommitted modifications.</source>
        <translation>ERD-sypaneel vir verhouding tussen tabelle &quot;%1&quot; en &quot;%2&quot; het nie-vasgelegde wysigings.</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="57"/>
        <source>Apply changes to diagram</source>
        <comment>ERD editor</comment>
        <translation>Pas veranderinge op diagram toe</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="58"/>
        <source>Abort changes</source>
        <comment>ERD editor</comment>
        <translation>Staak veranderinge</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="240"/>
        <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>Wysig verhouding tussen &quot;%1&quot; en &quot;%2&quot;.</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="242"/>
        <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot; - change target to &quot;%3&quot;.</source>
        <translation>Wysig verhouding tussen &quot;%1&quot; en &quot;%2&quot; - verander teiken na &quot;%3&quot;.</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="252"/>
        <source>Failed to execute DDL required for relation modification. Details: %1</source>
        <translation>Kon nie DDL uitvoer wat vir verhoudingswysiging vereis word nie. Besonderhede: %1</translation>
    </message>
</context>
<context>
    <name>ErdEditorPlugin</name>
    <message>
        <location filename="../erdeditorplugin.cpp" line="20"/>
        <source>Open ERD editor</source>
        <translation>Maak ERD-redigeerder oop</translation>
    </message>
    <message>
        <location filename="../erdeditorplugin.cpp" line="74"/>
        <source>ERD editor cannot open because the database contains %1 tables, exceeding the configured limit of %2 tables. You can increase this limit in the settings, but higher values may slow down or freeze the application.</source>
        <translation>ERD-redigeerder kan nie oopmaak nie omdat die databasis %1 tabelle bevat, wat die gekonfigureerde limiet van %2 tabelle oorskry. Jy kan hierdie limiet in die instellings verhoog, maar hoër waardes kan die toepassing stadiger maak of laat vries.</translation>
    </message>
</context>
<context>
    <name>ErdScene</name>
    <message>
        <location filename="../scene/erdscene.cpp" line="530"/>
        <source>Delete multiple diagram elements.</source>
        <comment>ERD editor</comment>
        <translation>Vee veelvuldige diagramelemente uit.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="547"/>
        <source>Failed to execute the undo DDL. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>Kon nie die ontdoen-DDL uitvoer nie. Besonderhede: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="569"/>
        <source>Failed to execute the redo DDL. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>Kon nie die herdoen-DDL uitvoer nie. Besonderhede: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="596"/>
        <source>Failed to execute DDL required for table deletion. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>Kon nie DDL uitvoer wat vir tabeluitvee vereis word nie. Besonderhede: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="607"/>
        <source>Delete foreign key between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>Vee vreemde sleutel tussen &quot;%1&quot; en &quot;%2&quot; uit.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="616"/>
        <source>Failed to execute DDL required for foreign key deletion. Details: %1</source>
        <translation>Kon nie DDL uitvoer wat vir die uitvee van die vreemde sleutel vereis word nie. Besonderhede: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="824"/>
        <source>Arrange entities</source>
        <translation>Rangskik entiteite</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="825"/>
        <source>Are you sure you want to automatically arrange the entities on the diagram? This action will overwrite the current layout, and any manual adjustments will be lost.</source>
        <translation>Is jy seker jy wil die entiteite op die diagram outomaties rangskik? Hierdie aksie sal die huidige uitleg oorskryf, en enige handmatige aanpassings sal verlore gaan.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="845"/>
        <source>Change color of table &quot;%1&quot; to %2.</source>
        <translation>Verander kleur van tabel &quot;%1&quot; na %2.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="851"/>
        <source>Change color of multiple tables.</source>
        <translation>Verander kleur van veelvuldige tabelle.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="696"/>
        <source>Apply diagram layout</source>
        <translation>Pas diagramuitleg toe</translation>
    </message>
</context>
<context>
    <name>ErdTableWindow</name>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="29"/>
        <source>Apply changes to diagram</source>
        <comment>ERD editor</comment>
        <translation>Pas veranderinge op diagram toe</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="30"/>
        <source>Abort changes</source>
        <comment>ERD editor</comment>
        <translation>Staak veranderinge</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="49"/>
        <source>ERD side panel for table &quot;%1&quot; has uncommitted modifications.</source>
        <translation>ERD-sypaneel vir tabel &quot;%1&quot; het nie-vasgelegde wysigings.</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="106"/>
        <source>Invalid table changes</source>
        <comment>ERD editor</comment>
        <translation>Ongeldige tabelveranderinge</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="108"/>
        <source>&lt;b&gt;The table contains invalid changes&lt;/b&gt;</source>
        <comment>ERD editor</comment>
        <translation>&lt;b&gt;Die tabel bevat ongeldige veranderinge&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="109"/>
        <source>Some of the changes you made cannot be applied because they contain errors.&lt;br&gt;&lt;br&gt;&lt;b&gt;Errors:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;You can &lt;b&gt;return to editing&lt;/b&gt; and fix the problems, or &lt;b&gt;discard your changes&lt;/b&gt; and restore the previous state of the table.</source>
        <comment>ERD editor</comment>
        <translation>Sommige van die veranderinge wat jy aangebring het, kan nie toegepas word nie omdat hulle foute bevat.&lt;br&gt;&lt;br&gt;&lt;b&gt;Foute:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;Jy kan &lt;b&gt;terugkeer na redigering&lt;/b&gt; en die probleme regstel, of &lt;b&gt;jou veranderinge weggooi&lt;/b&gt; en die vorige toestand van die tabel herstel.</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="118"/>
        <source>Fix errors</source>
        <comment>ERD editor</comment>
        <translation>Stel foute reg</translation>
    </message>
</context>
<context>
    <name>ErdView</name>
    <message>
        <location filename="../scene/erdview.cpp" line="323"/>
        <source>Cannot edit compound foreign keys this way. Such connections have to be edited through the side panel.</source>
        <comment>ERD editor</comment>
        <translation>Kan nie saamgestelde vreemde sleutels op hierdie manier redigeer nie. Sulke verbindings moet deur die sypaneel geredigeer word.</translation>
    </message>
    <message>
        <location filename="../scene/erdview.cpp" line="633"/>
        <source>Move table &quot;%1&quot;</source>
        <translation>Skuif tabel &quot;%1&quot;</translation>
    </message>
    <message>
        <location filename="../scene/erdview.cpp" line="639"/>
        <source>Move tables: %1</source>
        <translation>Skuif tabelle: %1</translation>
    </message>
</context>
<context>
    <name>ErdWindow</name>
    <message>
        <location filename="../erdwindow.ui" line="86"/>
        <source>Select an item to edit its properties</source>
        <translation>Kies ’n item om sy eienskappe te redigeer</translation>
    </message>
    <message>
        <location filename="../erdwindow.ui" line="114"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Hold the Spacebar and drag with the mouse to pan the diagram freely without selecting any items.&lt;/p&gt;&lt;p&gt;- Use the mouse wheel to zoom in and out.&lt;/p&gt;&lt;p&gt;- Deselect the table (or click Commit in the side panel toolbar) to apply the side panel changes to the diagram.&lt;/p&gt;&lt;p&gt;- Press Esc (or click Rollback in the side panel toolbar) to discard the side panel changes.&lt;/p&gt;&lt;p&gt;- Double-Click on a table name or column to edit the name inline.&lt;/p&gt;&lt;p&gt;- Shift-Double-Click on a column to edit column details (datatype, constraints).&lt;/p&gt;&lt;p&gt;- To create a foreign key between table, click the middle mouse button on the table columns you want to connect.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;All diagram changes remain pending until you explicitly commit or roll them back&lt;/span&gt; using the toolbar buttons in the top-left corner of the diagram.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Learn more (click to open online help page)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Hou die Spasiebalk in en sleep met die muis om die diagram vrylik te pan sonder om enige items te kies.&lt;/p&gt;&lt;p&gt;- Gebruik die muiswiel om in en uit te zoem.&lt;/p&gt;&lt;p&gt;- Ontkies die tabel (of klik Vaslê in die sypaneel se nutsbalk) om die sypaneelveranderinge op die diagram toe te pas.&lt;/p&gt;&lt;p&gt;- Druk Esc (of klik Terugrol in die sypaneel se nutsbalk) om die sypaneelveranderinge weg te gooi.&lt;/p&gt;&lt;p&gt;- Dubbelklik op ’n tabelnaam of kolom om die naam inlyn te redigeer.&lt;/p&gt;&lt;p&gt;- Shift-dubbelklik op ’n kolom om kolombesonderhede (datatipe, beperkings) te redigeer.&lt;/p&gt;&lt;p&gt;- Om ’n vreemde sleutel tussen tabelle te skep, klik met die middelste muisknoppie op die tabelkolomme wat jy wil verbind.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;Alle diagramveranderinge bly hangende totdat jy dit uitdruklik vaslê of terugrol&lt;/span&gt; deur die nutsbalkknoppies in die boonste linkerhoek van die diagram te gebruik.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Kom meer te wete (klik om die aanlyn hulpbladsy oop te maak)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="165"/>
        <source>Cancels ongoing action</source>
        <comment>ERD editor</comment>
        <translation>Kanselleer voortgaande aksie</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="166"/>
        <source>Create a table</source>
        <comment>ERD editor</comment>
        <translation>Skep ’n tabel</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="168"/>
        <location filename="../erdwindow.cpp" line="649"/>
        <source>Reload schema</source>
        <comment>ERD editor</comment>
        <translation>Herlaai skema</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="169"/>
        <source>Commit all pending changes</source>
        <comment>ERD editor</comment>
        <translation>Lê alle hangende veranderinge vas</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="170"/>
        <source>Revert diagram to initial state</source>
        <comment>ERD editor</comment>
        <translation>Herstel diagram na aanvanklike toestand</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="172"/>
        <source>Undo</source>
        <comment>ERD editor</comment>
        <translation>Ontdoen</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="173"/>
        <source>Redo</source>
        <comment>ERD editor</comment>
        <translation>Herdoen</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="189"/>
        <source>Create a table</source>
        <translation>Skep ’n tabel</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="202"/>
        <source>Select all</source>
        <translation>Kies alles</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="311"/>
        <source>Filter items</source>
        <comment>ERD editor</comment>
        <translation>Filter items</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="312"/>
        <source>Items that don’t match the filter will be dimmed.</source>
        <comment>ERD editor</comment>
        <translation>Items wat nie met die filter ooreenstem nie, sal verdof word.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="448"/>
        <source>table name</source>
        <comment>ERD editor</comment>
        <translation>tabelnaam</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="450"/>
        <source>column name</source>
        <comment>ERD editor</comment>
        <translation>kolomnaam</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="570"/>
        <source>All changes have been successfully applied to the database.</source>
        <comment>ERD editor</comment>
        <translation>Alle veranderinge is suksesvol op die databasis toegepas.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="578"/>
        <source>The changes were successfully committed. No modifications to the database schema were required.</source>
        <comment>ERD editor</comment>
        <translation>Die veranderinge is suksesvol vasgelê. Geen wysigings aan die databasisskema was nodig nie.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="586"/>
        <source>Failed to apply changes to the database. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>Kon nie veranderinge op die databasis toepas nie. Besonderhede: %1</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="650"/>
        <source>This action will discard all your pending changes and reload the diagram from the current database schema. The undo/redo history will be cleared. Do you want to proceed?</source>
        <translation>Hierdie aksie sal al jou hangende veranderinge weggooi en die diagram vanaf die huidige databasisskema herlaai. Die ontdoen/herdoen-geskiedenis sal skoongemaak word. Wil jy voortgaan?</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="833"/>
        <source>ERD window &quot;%1&quot; has uncommitted changes.</source>
        <translation>ERD-venster &quot;%1&quot; het nie-vasgelegde veranderinge.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="1145"/>
        <source>ERD editor (%1)</source>
        <translation>ERD-redigeerder (%1)</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="1147"/>
        <source>ERD editor</source>
        <translation>ERD-redigeerder</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="181"/>
        <source>The number of changes pending for commit. Click to see details.</source>
        <comment>ERD editor</comment>
        <translation>Die aantal veranderinge wat vir vaslegging hangende is. Klik om besonderhede te sien.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="190"/>
        <source>Add a foreign key</source>
        <comment>ERD editor</comment>
        <translation>Voeg ’n vreemde sleutel by</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="192"/>
        <source>Delete selected items</source>
        <comment>ERD editor</comment>
        <translation>Vee geselekteerde items uit</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="198"/>
        <source>Auto-arrange (local forces)</source>
        <comment>ERD editor</comment>
        <translation>Outomaties rangskik (plaaslike kragte)</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="199"/>
        <source>Auto-arrange (global balance)</source>
        <comment>ERD editor</comment>
        <translation>Outomaties rangskik (globale balans)</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="213"/>
        <source>Set table color</source>
        <comment>ERD editor</comment>
        <translation>Stel tabelkleur in</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="241"/>
        <source>Use straight line</source>
        <comment>ERD editor</comment>
        <translation>Gebruik reguit lyn</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="242"/>
        <source>Use curvy line</source>
        <comment>ERD editor</comment>
        <translation>Gebruik geboë lyn</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="243"/>
        <source>Use square line</source>
        <comment>ERD editor</comment>
        <translation>Gebruik vierkantige lyn</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="254"/>
        <source>Choose line type</source>
        <comment>ERD editor</comment>
        <translation>Kies lyntipe</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../changes/erdchangedeleteentity.cpp" line="48"/>
        <source>Drop table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>Laat val tabel &quot;%1&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdchangemodifyentity.cpp" line="61"/>
        <source>Modify table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>Wysig tabel &quot;%1&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdchangenewentity.cpp" line="54"/>
        <source>Create table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>Skep tabel &quot;%1&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdeffectivechangemerger.cpp" line="31"/>
        <source>Failed to create in-memory databases required for change compacting.</source>
        <translation>Kon nie in-geheue-databasisse skep wat vir veranderingkompaktering vereis word nie.</translation>
    </message>
    <message>
        <location filename="../changes/erdeffectivechangemerger.cpp" line="399"/>
        <source>Drop tables: %1</source>
        <comment>ERD editor</comment>
        <translation>Laat val tabelle: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="149"/>
        <source>Could not commit changes for finalized ERD connection.</source>
        <translation>Kon nie veranderinge vir gefinaliseerde ERD-verbinding vaslê nie.</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="155"/>
        <source>Update relationship from &quot;%1&quot;-&quot;%2&quot; to &quot;%1&quot;-&quot;%3&quot;.</source>
        <translation>Werk verhouding van &quot;%1&quot;-&quot;%2&quot; na &quot;%1&quot;-&quot;%3&quot; by.</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="157"/>
        <source>Create relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>Skep verhouding tussen &quot;%1&quot; en &quot;%2&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdchangemoveentity.cpp" line="28"/>
        <source>Move table &quot;%1&quot;</source>
        <translation>Skuif tabel &quot;%1&quot;</translation>
    </message>
</context>
</TS>

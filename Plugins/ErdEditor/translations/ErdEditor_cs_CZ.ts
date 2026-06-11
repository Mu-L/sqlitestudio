<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="cs" sourcelanguage="en">
<context>
    <name>ErdChangeRegistryDialog</name>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="14"/>
        <source>Pending changes registry</source>
        <translation>Registr čekajících změn</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="65"/>
        <source>Pending changes</source>
        <translation>Čekající změny</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="105"/>
        <source>DDL preview</source>
        <translation>Náhled DDL</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="143"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Shows the changes as they will be committed. Redundant or mutually cancelling steps are merged or removed from the list.&lt;br/&gt;When disabled, all individual undo and redo steps are shown.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Zobrazuje změny tak, jak budou potvrzeny. Nadbytečné nebo vzájemně se rušící kroky jsou sloučeny nebo odstraněny ze seznamu.&lt;br/&gt;Když je tato volba vypnutá, zobrazí se všechny jednotlivé kroky zpět a znovu.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="146"/>
        <source>Show effective changes only</source>
        <translation>Zobrazit pouze efektivní změny</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="153"/>
        <source>&lt;html&gt;&lt;body&gt;Shows changes that do not modify the database schema, but only affect the diagram (for example, table position changes). &lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;body&gt;Zobrazuje změny, které nemění schéma databáze, ale ovlivňují pouze diagram (například změny polohy tabulek). &lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="156"/>
        <source>Show non-schema changes</source>
        <translation>Zobrazit změny mimo schéma</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.cpp" line="58"/>
        <source>-- This is a change applied only to the diagram. It has no database schema efects.</source>
        <comment>ERD editor</comment>
        <translation>-- Toto je změna použitá pouze na diagram. Nemá žádný vliv na schéma databáze.</translation>
    </message>
</context>
<context>
    <name>ErdConfig</name>
    <message>
        <location filename="../erdconfig.ui" line="33"/>
        <source>Maximum number of tables for ERD editor</source>
        <translation>Maximální počet tabulek pro editor ERD</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="40"/>
        <source>Setting this value too high may cause the application to slow down or become unresponsive when opening the ERD editor.</source>
        <translation>Nastavení této hodnoty příliš vysoko může způsobit zpomalení aplikace nebo její nereagování při otevírání editoru ERD.</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="56"/>
        <source>Starts panning as soon as the Space key is pressed, without requiring a mouse button press.</source>
        <translation>Spustí posouvání ihned po stisknutí mezerníku, bez nutnosti stisknout tlačítko myši.</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="59"/>
        <source>Pan view with Space only</source>
        <translation>Posouvat zobrazení pouze mezerníkem</translation>
    </message>
</context>
<context>
    <name>ErdConnectionPanel</name>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="59"/>
        <source>Foreign key properties</source>
        <translation>Vlastnosti cizího klíče</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="83"/>
        <source>Composite relation (multiple columns)</source>
        <translation>Složený vztah (více sloupců)</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="137"/>
        <source>Referencing (child) table:</source>
        <translation>Odkazující (podřízená) tabulka:</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="156"/>
        <source>Referencing (child) column:</source>
        <translation>Odkazující (podřízený) sloupec:</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="51"/>
        <source>ERD side panel for relation between tables &quot;%1&quot; and &quot;%2&quot; has uncommitted modifications.</source>
        <translation>Boční panel ERD pro vztah mezi tabulkami &quot;%1&quot; a &quot;%2&quot; obsahuje nepotvrzené úpravy.</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="57"/>
        <source>Apply changes to diagram</source>
        <comment>ERD editor</comment>
        <translation>Použít změny na diagram</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="58"/>
        <source>Abort changes</source>
        <comment>ERD editor</comment>
        <translation>Zrušit změny</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="240"/>
        <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>Upravit vztah mezi &quot;%1&quot; a &quot;%2&quot;.</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="242"/>
        <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot; - change target to &quot;%3&quot;.</source>
        <translation>Upravit vztah mezi &quot;%1&quot; a &quot;%2&quot; – změnit cíl na &quot;%3&quot;.</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="252"/>
        <source>Failed to execute DDL required for relation modification. Details: %1</source>
        <translation>Nepodařilo se provést DDL vyžadované pro úpravu vztahu. Podrobnosti: %1</translation>
    </message>
</context>
<context>
    <name>ErdEditorPlugin</name>
    <message>
        <location filename="../erdeditorplugin.cpp" line="20"/>
        <source>Open ERD editor</source>
        <translation>Otevřít editor ERD</translation>
    </message>
    <message>
        <location filename="../erdeditorplugin.cpp" line="74"/>
        <source>ERD editor cannot open because the database contains %1 tables, exceeding the configured limit of %2 tables. You can increase this limit in the settings, but higher values may slow down or freeze the application.</source>
        <translation>Editor ERD nelze otevřít, protože databáze obsahuje %1 tabulek, což překračuje nakonfigurovaný limit %2 tabulek. Tento limit můžete zvýšit v nastavení, ale vyšší hodnoty mohou aplikaci zpomalit nebo zmrazit.</translation>
    </message>
</context>
<context>
    <name>ErdScene</name>
    <message>
        <location filename="../scene/erdscene.cpp" line="530"/>
        <source>Delete multiple diagram elements.</source>
        <comment>ERD editor</comment>
        <translation>Odstranit více prvků diagramu.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="547"/>
        <source>Failed to execute the undo DDL. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>Nepodařilo se provést DDL pro krok zpět. Podrobnosti: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="569"/>
        <source>Failed to execute the redo DDL. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>Nepodařilo se provést DDL pro krok znovu. Podrobnosti: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="596"/>
        <source>Failed to execute DDL required for table deletion. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>Nepodařilo se provést DDL vyžadované pro odstranění tabulky. Podrobnosti: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="607"/>
        <source>Delete foreign key between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>Odstranit cizí klíč mezi &quot;%1&quot; a &quot;%2&quot;.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="616"/>
        <source>Failed to execute DDL required for foreign key deletion. Details: %1</source>
        <translation>Nepodařilo se provést DDL vyžadované pro odstranění cizího klíče. Podrobnosti: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="824"/>
        <source>Arrange entities</source>
        <translation>Uspořádat entity</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="825"/>
        <source>Are you sure you want to automatically arrange the entities on the diagram? This action will overwrite the current layout, and any manual adjustments will be lost.</source>
        <translation>Opravdu chcete automaticky uspořádat entity v diagramu? Tato akce přepíše aktuální rozvržení a veškeré ruční úpravy budou ztraceny.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="845"/>
        <source>Change color of table &quot;%1&quot; to %2.</source>
        <translation>Změnit barvu tabulky &quot;%1&quot; na %2.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="851"/>
        <source>Change color of multiple tables.</source>
        <translation>Změnit barvu více tabulek.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="696"/>
        <source>Apply diagram layout</source>
        <translation>Použít rozvržení diagramu</translation>
    </message>
</context>
<context>
    <name>ErdTableWindow</name>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="29"/>
        <source>Apply changes to diagram</source>
        <comment>ERD editor</comment>
        <translation>Použít změny na diagram</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="30"/>
        <source>Abort changes</source>
        <comment>ERD editor</comment>
        <translation>Zrušit změny</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="49"/>
        <source>ERD side panel for table &quot;%1&quot; has uncommitted modifications.</source>
        <translation>Boční panel ERD pro tabulku &quot;%1&quot; obsahuje nepotvrzené úpravy.</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="106"/>
        <source>Invalid table changes</source>
        <comment>ERD editor</comment>
        <translation>Neplatné změny tabulky</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="108"/>
        <source>&lt;b&gt;The table contains invalid changes&lt;/b&gt;</source>
        <comment>ERD editor</comment>
        <translation>&lt;b&gt;Tabulka obsahuje neplatné změny&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="109"/>
        <source>Some of the changes you made cannot be applied because they contain errors.&lt;br&gt;&lt;br&gt;&lt;b&gt;Errors:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;You can &lt;b&gt;return to editing&lt;/b&gt; and fix the problems, or &lt;b&gt;discard your changes&lt;/b&gt; and restore the previous state of the table.</source>
        <comment>ERD editor</comment>
        <translation>Některé provedené změny nelze použít, protože obsahují chyby.&lt;br&gt;&lt;br&gt;&lt;b&gt;Chyby:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;Můžete se &lt;b&gt;vrátit k úpravám&lt;/b&gt; a problémy opravit, nebo &lt;b&gt;zahodit své změny&lt;/b&gt; a obnovit předchozí stav tabulky.</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="118"/>
        <source>Fix errors</source>
        <comment>ERD editor</comment>
        <translation>Opravit chyby</translation>
    </message>
</context>
<context>
    <name>ErdView</name>
    <message>
        <location filename="../scene/erdview.cpp" line="323"/>
        <source>Cannot edit compound foreign keys this way. Such connections have to be edited through the side panel.</source>
        <comment>ERD editor</comment>
        <translation>Složené cizí klíče nelze tímto způsobem upravovat. Taková spojení je nutné upravovat prostřednictvím bočního panelu.</translation>
    </message>
    <message>
        <location filename="../scene/erdview.cpp" line="633"/>
        <source>Move table &quot;%1&quot;</source>
        <translation>Přesunout tabulku &quot;%1&quot;</translation>
    </message>
    <message>
        <location filename="../scene/erdview.cpp" line="639"/>
        <source>Move tables: %1</source>
        <translation>Přesunout tabulky: %1</translation>
    </message>
</context>
<context>
    <name>ErdWindow</name>
    <message>
        <location filename="../erdwindow.ui" line="86"/>
        <source>Select an item to edit its properties</source>
        <translation>Vyberte položku pro úpravu jejích vlastností</translation>
    </message>
    <message>
        <location filename="../erdwindow.ui" line="114"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Hold the Spacebar and drag with the mouse to pan the diagram freely without selecting any items.&lt;/p&gt;&lt;p&gt;- Use the mouse wheel to zoom in and out.&lt;/p&gt;&lt;p&gt;- Deselect the table (or click Commit in the side panel toolbar) to apply the side panel changes to the diagram.&lt;/p&gt;&lt;p&gt;- Press Esc (or click Rollback in the side panel toolbar) to discard the side panel changes.&lt;/p&gt;&lt;p&gt;- Double-Click on a table name or column to edit the name inline.&lt;/p&gt;&lt;p&gt;- Shift-Double-Click on a column to edit column details (datatype, constraints).&lt;/p&gt;&lt;p&gt;- To create a foreign key between table, click the middle mouse button on the table columns you want to connect.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;All diagram changes remain pending until you explicitly commit or roll them back&lt;/span&gt; using the toolbar buttons in the top-left corner of the diagram.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Learn more (click to open online help page)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Podržte mezerník a táhněte myší, abyste mohli diagram volně posouvat bez výběru jakýchkoli položek.&lt;/p&gt;&lt;p&gt;- K přiblížení a oddálení použijte kolečko myši.&lt;/p&gt;&lt;p&gt;- Zrušte výběr tabulky (nebo klikněte na Potvrdit na panelu nástrojů bočního panelu), abyste změny z bočního panelu použili na diagram.&lt;/p&gt;&lt;p&gt;- Stiskněte Esc (nebo klikněte na Vrátit zpět na panelu nástrojů bočního panelu), chcete-li změny z bočního panelu zahodit.&lt;/p&gt;&lt;p&gt;- Dvojitým kliknutím na název tabulky nebo sloupec upravíte název přímo na místě.&lt;/p&gt;&lt;p&gt;- Shift + dvojité kliknutí na sloupec upraví podrobnosti sloupce (datový typ, omezení).&lt;/p&gt;&lt;p&gt;- Chcete-li vytvořit cizí klíč mezi tabulkami, klikněte prostředním tlačítkem myši na sloupce tabulek, které chcete propojit.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;Všechny změny diagramu zůstávají čekající, dokud je výslovně nepotvrdíte nebo nevrátíte zpět&lt;/span&gt; pomocí tlačítek na panelu nástrojů v levém horním rohu diagramu.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Další informace (kliknutím otevřete stránku online nápovědy)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="165"/>
        <source>Cancels ongoing action</source>
        <comment>ERD editor</comment>
        <translation>Zruší probíhající akci</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="166"/>
        <source>Create a table</source>
        <comment>ERD editor</comment>
        <translation>Vytvořit tabulku</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="168"/>
        <location filename="../erdwindow.cpp" line="649"/>
        <source>Reload schema</source>
        <comment>ERD editor</comment>
        <translation>Znovu načíst schéma</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="169"/>
        <source>Commit all pending changes</source>
        <comment>ERD editor</comment>
        <translation>Potvrdit všechny čekající změny</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="170"/>
        <source>Revert diagram to initial state</source>
        <comment>ERD editor</comment>
        <translation>Vrátit diagram do počátečního stavu</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="172"/>
        <source>Undo</source>
        <comment>ERD editor</comment>
        <translation>Zpět</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="173"/>
        <source>Redo</source>
        <comment>ERD editor</comment>
        <translation>Znovu</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="189"/>
        <source>Create a table</source>
        <translation>Vytvořit tabulku</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="202"/>
        <source>Select all</source>
        <translation>Vybrat vše</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="311"/>
        <source>Filter items</source>
        <comment>ERD editor</comment>
        <translation>Filtrovat položky</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="312"/>
        <source>Items that don’t match the filter will be dimmed.</source>
        <comment>ERD editor</comment>
        <translation>Položky, které neodpovídají filtru, budou ztlumeny.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="448"/>
        <source>table name</source>
        <comment>ERD editor</comment>
        <translation>název tabulky</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="450"/>
        <source>column name</source>
        <comment>ERD editor</comment>
        <translation>název sloupce</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="570"/>
        <source>All changes have been successfully applied to the database.</source>
        <comment>ERD editor</comment>
        <translation>Všechny změny byly úspěšně použity na databázi.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="578"/>
        <source>The changes were successfully committed. No modifications to the database schema were required.</source>
        <comment>ERD editor</comment>
        <translation>Změny byly úspěšně potvrzeny. Nebyly vyžadovány žádné úpravy schématu databáze.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="586"/>
        <source>Failed to apply changes to the database. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>Nepodařilo se použít změny na databázi. Podrobnosti: %1</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="650"/>
        <source>This action will discard all your pending changes and reload the diagram from the current database schema. The undo/redo history will be cleared. Do you want to proceed?</source>
        <translation>Tato akce zahodí všechny vaše čekající změny a znovu načte diagram z aktuálního schématu databáze. Historie kroků zpět/znovu bude vymazána. Chcete pokračovat?</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="833"/>
        <source>ERD window &quot;%1&quot; has uncommitted changes.</source>
        <translation>Okno ERD &quot;%1&quot; obsahuje nepotvrzené změny.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="1145"/>
        <source>ERD editor (%1)</source>
        <translation>Editor ERD (%1)</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="1147"/>
        <source>ERD editor</source>
        <translation>Editor ERD</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="181"/>
        <source>The number of changes pending for commit. Click to see details.</source>
        <comment>ERD editor</comment>
        <translation>Počet změn čekajících na potvrzení. Kliknutím zobrazíte podrobnosti.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="190"/>
        <source>Add a foreign key</source>
        <comment>ERD editor</comment>
        <translation>Přidat cizí klíč</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="192"/>
        <source>Delete selected items</source>
        <comment>ERD editor</comment>
        <translation>Odstranit vybrané položky</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="198"/>
        <source>Auto-arrange (local forces)</source>
        <comment>ERD editor</comment>
        <translation>Automaticky uspořádat (lokální síly)</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="199"/>
        <source>Auto-arrange (global balance)</source>
        <comment>ERD editor</comment>
        <translation>Automaticky uspořádat (globální rovnováha)</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="213"/>
        <source>Set table color</source>
        <comment>ERD editor</comment>
        <translation>Nastavit barvu tabulky</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="241"/>
        <source>Use straight line</source>
        <comment>ERD editor</comment>
        <translation>Použít rovnou čáru</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="242"/>
        <source>Use curvy line</source>
        <comment>ERD editor</comment>
        <translation>Použít křivou čáru</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="243"/>
        <source>Use square line</source>
        <comment>ERD editor</comment>
        <translation>Použít pravoúhlou čáru</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="254"/>
        <source>Choose line type</source>
        <comment>ERD editor</comment>
        <translation>Vybrat typ čáry</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../changes/erdchangedeleteentity.cpp" line="48"/>
        <source>Drop table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>Odstranit tabulku &quot;%1&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdchangemodifyentity.cpp" line="61"/>
        <source>Modify table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>Upravit tabulku &quot;%1&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdchangenewentity.cpp" line="54"/>
        <source>Create table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>Vytvořit tabulku &quot;%1&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdeffectivechangemerger.cpp" line="31"/>
        <source>Failed to create in-memory databases required for change compacting.</source>
        <translation>Nepodařilo se vytvořit databáze v paměti vyžadované pro zhuštění změn.</translation>
    </message>
    <message>
        <location filename="../changes/erdeffectivechangemerger.cpp" line="399"/>
        <source>Drop tables: %1</source>
        <comment>ERD editor</comment>
        <translation>Odstranit tabulky: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="149"/>
        <source>Could not commit changes for finalized ERD connection.</source>
        <translation>Nepodařilo se potvrdit změny pro dokončené spojení ERD.</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="155"/>
        <source>Update relationship from &quot;%1&quot;-&quot;%2&quot; to &quot;%1&quot;-&quot;%3&quot;.</source>
        <translation>Aktualizovat vztah z &quot;%1&quot;-&quot;%2&quot; na &quot;%1&quot;-&quot;%3&quot;.</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="157"/>
        <source>Create relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>Vytvořit vztah mezi &quot;%1&quot; a &quot;%2&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdchangemoveentity.cpp" line="28"/>
        <source>Move table &quot;%1&quot;</source>
        <translation>Přesunout tabulku &quot;%1&quot;</translation>
    </message>
</context>
</TS>

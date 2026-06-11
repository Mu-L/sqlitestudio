<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pl" sourcelanguage="en">
  <context>
    <name>ErdChangeRegistryDialog</name>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="14"/>
      <source>Pending changes registry</source>
      <translation>Rejestr zmian oczekujących</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="65"/>
      <source>Pending changes</source>
      <translation>Oczekujące zmiany</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="105"/>
      <source>DDL preview</source>
      <translation>Podgląd DDL</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="143"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Shows the changes as they will be committed. Redundant or mutually cancelling steps are merged or removed from the list.&lt;br/&gt;When disabled, all individual undo and redo steps are shown.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Pokazuje zmiany w postaci, w jakiej zostaną zatwierdzone. Zbędne lub wzajemnie znoszące się operacje są scalane albo usuwane z listy.&lt;br/&gt;Po wyłączeniu tej opcji wyświetlane są wszystkie pojedyncze kroki cofania i ponawiania zmian.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="146"/>
      <source>Show effective changes only</source>
      <translation>Pokaż tylko faktyczne zmiany</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="153"/>
      <source>&lt;html&gt;&lt;body&gt;Shows changes that do not modify the database schema, but only affect the diagram (for example, table position changes). &lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;body&gt;Pokazuje zmiany, które nie modyfikują schematu bazy danych, a wpływają jedynie na diagram (na przykład zmiany położenia tabel).&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="156"/>
      <source>Show non-schema changes</source>
      <translation>Pokaż zmiany niezwiązane ze schematem</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.cpp" line="58"/>
      <source>-- This is a change applied only to the diagram. It has no database schema efects.</source>
      <comment>ERD editor</comment>
      <translation>-- To jest zmiana zastosowana tylko do diagramu. Nie ma żadnych skutków dla schematu bazy danych.</translation>
    </message>
  </context>
  <context>
    <name>ErdConfig</name>
    <message>
      <location filename="../erdconfig.ui" line="33"/>
      <source>Maximum number of tables for ERD editor</source>
      <translation>Maksymalna liczba tabel dla edytora ERD</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="40"/>
      <source>Setting this value too high may cause the application to slow down or become unresponsive when opening the ERD editor.</source>
      <translation>Ustawienie tej wartości zbyt wysoko może spowodować spowolnienie aplikacji lub brak reakcji podczas otwierania edytora ERD.</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="56"/>
      <source>Starts panning as soon as the Space key is pressed, without requiring a mouse button press.</source>
      <translation>Rozpoczyna przesuwanie, gdy tylko spacja zostanie naciśnięta, bez konieczności naciśnięcia przycisku myszy.</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="59"/>
      <source>Pan view with Space only</source>
      <translation>Przesuwaj widok samą spacją</translation>
    </message>
  </context>
  <context>
    <name>ErdConnectionPanel</name>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="59"/>
      <source>Foreign key properties</source>
      <translation>Właściwości klucza obcego</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="83"/>
      <source>Composite relation (multiple columns)</source>
      <translation>Relacja złożona (wiele kolumn)</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="137"/>
      <source>Referencing (child) table:</source>
      <translation>Tabela odwołująca się (podrzędna):</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="156"/>
      <source>Referencing (child) column:</source>
      <translation>Kolumna odwołująca się (podrzędna):</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="51"/>
      <source>ERD side panel for relation between tables &quot;%1&quot; and &quot;%2&quot; has uncommitted modifications.</source>
      <translation>Panel ERD dla relacji pomiędzy tabelami &quot;%1&quot; i &quot;%2&quot; posiada niezatwierdzone modyfikacje.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="57"/>
      <source>Apply changes to diagram</source>
      <comment>ERD editor</comment>
      <translation>Zastosuj zmiany do diagramu</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="58"/>
      <source>Abort changes</source>
      <comment>ERD editor</comment>
      <translation>Porzuć zmiany</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="240"/>
      <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>Modyfikuj relację między &quot;%1&quot; i &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="242"/>
      <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot; - change target to &quot;%3&quot;.</source>
      <translation>Modyfikuj relację między &quot;%1&quot; i &quot;%2&quot; - zmień cel na &quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="252"/>
      <source>Failed to execute DDL required for relation modification. Details: %1</source>
      <translation>Nie udało się wykonać DDL wymaganego do modyfikacji relacji. Szczegóły: %1</translation>
    </message>
  </context>
  <context>
    <name>ErdEditorPlugin</name>
    <message>
      <location filename="../erdeditorplugin.cpp" line="20"/>
      <source>Open ERD editor</source>
      <translation>Otwórz edytor ERD</translation>
    </message>
    <message>
      <location filename="../erdeditorplugin.cpp" line="74"/>
      <source>ERD editor cannot open because the database contains %1 tables, exceeding the configured limit of %2 tables. You can increase this limit in the settings, but higher values may slow down or freeze the application.</source>
      <translation>Nie można otworzyć edytora ERD, ponieważ baza danych zawiera %1 tabel, przekraczając skonfigurowany limit tabel %2. Możesz zwiększyć ten limit w ustawieniach, ale wyższe wartości mogą spowolnić lub zamrozić aplikację.</translation>
    </message>
  </context>
  <context>
    <name>ErdScene</name>
    <message>
      <location filename="../scene/erdscene.cpp" line="530"/>
      <source>Delete multiple diagram elements.</source>
      <comment>ERD editor</comment>
      <translation>Usuń wiele elementów diagramu.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="547"/>
      <source>Failed to execute the undo DDL. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>Nie udało się wykonać cofnięcia DDL. Szczegóły: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="569"/>
      <source>Failed to execute the redo DDL. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>Nie udało się powtórnie wykonać DDL. Szczegóły: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="596"/>
      <source>Failed to execute DDL required for table deletion. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>Nie udało się wykonać DDL wymaganego do modyfikacji relacji. Szczegóły: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="607"/>
      <source>Delete foreign key between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>Usuń klucz obcy między &quot;%1&quot; i &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="616"/>
      <source>Failed to execute DDL required for foreign key deletion. Details: %1</source>
      <translation>Nie udało się wykonać DDL wymaganego do usunięcia klucza obcego. Szczegóły: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="824"/>
      <source>Arrange entities</source>
      <translation>Ułóż obiekty</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="825"/>
      <source>Are you sure you want to automatically arrange the entities on the diagram? This action will overwrite the current layout, and any manual adjustments will be lost.</source>
      <translation>Czy na pewno chcesz automatycznie zorganizować obiekty na diagramie? Ta akcja nadpisze bieżący układ, a wszelkie ręczne ustawienia zostaną utracone.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="845"/>
      <source>Change color of table &quot;%1&quot; to %2.</source>
      <translation>Zmień kolor tabeli &quot;%1&quot; na %2.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="851"/>
      <source>Change color of multiple tables.</source>
      <translation>Zmień kolor wielu tabel.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="696"/>
      <source>Apply diagram layout</source>
      <translation>Zastosuj układ diagramu</translation>
    </message>
  </context>
  <context>
    <name>ErdTableWindow</name>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="29"/>
      <source>Apply changes to diagram</source>
      <comment>ERD editor</comment>
      <translation>Zastosuj zmiany do diagramu</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="30"/>
      <source>Abort changes</source>
      <comment>ERD editor</comment>
      <translation>Porzuć zmiany</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="49"/>
      <source>ERD side panel for table &quot;%1&quot; has uncommitted modifications.</source>
      <translation>Panel ERD dla tabeli &quot;%1&quot; posiada niezatwierdzone modyfikacje.</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="106"/>
      <source>Invalid table changes</source>
      <comment>ERD editor</comment>
      <translation>Nieprawidłowe zmiany tabeli</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="108"/>
      <source>&lt;b&gt;The table contains invalid changes&lt;/b&gt;</source>
      <comment>ERD editor</comment>
      <translation>&lt;b&gt;Tabela zawiera nieprawidłowe zmiany&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="109"/>
      <source>Some of the changes you made cannot be applied because they contain errors.&lt;br&gt;&lt;br&gt;&lt;b&gt;Errors:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;You can &lt;b&gt;return to editing&lt;/b&gt; and fix the problems, or &lt;b&gt;discard your changes&lt;/b&gt; and restore the previous state of the table.</source>
      <comment>ERD editor</comment>
      <translation>Niektóre z wprowadzonych zmian nie mogą zostać zastosowane, ponieważ zawierają błędy.&lt;br&gt;&lt;br&gt;&lt;b&gt;Błędy:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;Możesz &lt;b&gt;wrócić do edycji&lt;/b&gt; i rozwiązać problemy, lub &lt;b&gt;odrzuć zmiany&lt;/b&gt; i przywrócić poprzedni stan tabeli.</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="118"/>
      <source>Fix errors</source>
      <comment>ERD editor</comment>
      <translation>Napraw błędy</translation>
    </message>
  </context>
  <context>
    <name>ErdView</name>
    <message>
      <location filename="../scene/erdview.cpp" line="323"/>
      <source>Cannot edit compound foreign keys this way. Such connections have to be edited through the side panel.</source>
      <comment>ERD editor</comment>
      <translation>W ten sposób nie można edytować złożonych kluczy obcych. Takie połączenia muszą być edytowane przez panel boczny.</translation>
    </message>
    <message>
      <location filename="../scene/erdview.cpp" line="633"/>
      <source>Move table &quot;%1&quot;</source>
      <translation>Przesuń tabelę &quot;%1&quot;</translation>
    </message>
    <message>
      <location filename="../scene/erdview.cpp" line="639"/>
      <source>Move tables: %1</source>
      <translation>Przesuń tabele: %1</translation>
    </message>
  </context>
  <context>
    <name>ErdWindow</name>
    <message>
      <location filename="../erdwindow.ui" line="86"/>
      <source>Select an item to edit its properties</source>
      <translation>Wybierz element, aby edytować jego właściwości</translation>
    </message>
    <message>
      <location filename="../erdwindow.ui" line="114"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Hold the Spacebar and drag with the mouse to pan the diagram freely without selecting any items.&lt;/p&gt;&lt;p&gt;- Use the mouse wheel to zoom in and out.&lt;/p&gt;&lt;p&gt;- Deselect the table (or click Commit in the side panel toolbar) to apply the side panel changes to the diagram.&lt;/p&gt;&lt;p&gt;- Press Esc (or click Rollback in the side panel toolbar) to discard the side panel changes.&lt;/p&gt;&lt;p&gt;- Double-Click on a table name or column to edit the name inline.&lt;/p&gt;&lt;p&gt;- Shift-Double-Click on a column to edit column details (datatype, constraints).&lt;/p&gt;&lt;p&gt;- To create a foreign key between table, click the middle mouse button on the table columns you want to connect.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;All diagram changes remain pending until you explicitly commit or roll them back&lt;/span&gt; using the toolbar buttons in the top-left corner of the diagram.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Learn more (click to open online help page)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Przytrzymaj spację i przeciągnij myszą, aby swobodnie przemieszczać się po diagramie, nie zaznaczając żadnych elementów.&lt;/p&gt;&lt;p&gt;- Użyj kółka myszy, aby powiększać i pomniejszać.&lt;/p&gt;&lt;p&gt;- Odznacz tabelę (lub kliknij Zatwierdź w pasku narzędzi panelu bocznego), aby zastosować zmiany panelu bocznego do diagramu.&lt;/p&gt;&lt;p&gt;- Naciśnij Esc (lub Wycofaj w panelu bocznym), aby odrzucić zmiany panelu bocznego.&lt;/p&gt;&lt;p&gt;- Kliknij dwukrotnie na nazwę tabeli lub kolumnę, aby edytować nazwę bezpośrednio w diagramie.&lt;/p&gt;&lt;p&gt;- Shift + dwuklik na kolumnie, aby edytować szczegóły kolumny (typ danych, ograniczenia).&lt;/p&gt;&lt;p&gt;- Aby utworzyć klucz obcy między tabelami, kliknij środkowym przyciskiem myszy kolumny, które chcesz połączyć.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;Wszystkie zmiany diagramu pozostają w toku do momentu wyraźnego zatwierdzenia lub ich wycofania&lt;/span&gt; za pomocą przycisków na pasku narzędzi w lewym górnym rogu diagramu.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Dowiedz się więcej (kliknij aby otworzyć stronę pomocy online)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="165"/>
      <source>Cancels ongoing action</source>
      <comment>ERD editor</comment>
      <translation>Anuluje bieżące działanie</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="166"/>
      <source>Create a table</source>
      <comment>ERD editor</comment>
      <translation>Utwórz tabelę</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="168"/>
      <location filename="../erdwindow.cpp" line="649"/>
      <source>Reload schema</source>
      <comment>ERD editor</comment>
      <translation>Przeładuj schemat</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="169"/>
      <source>Commit all pending changes</source>
      <comment>ERD editor</comment>
      <translation>Zatwierdź wszystkie oczekujące zmiany</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="170"/>
      <source>Revert diagram to initial state</source>
      <comment>ERD editor</comment>
      <translation>Przywróć diagram do stanu początkowego</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="172"/>
      <source>Undo</source>
      <comment>ERD editor</comment>
      <translation>Cofnij</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="173"/>
      <source>Redo</source>
      <comment>ERD editor</comment>
      <translation>Ponów</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="189"/>
      <source>Create a table</source>
      <translation>Utwórz tabelę</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="202"/>
      <source>Select all</source>
      <translation>Zaznacz wszystko</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="311"/>
      <source>Filter items</source>
      <comment>ERD editor</comment>
      <translation>Filtruj elementy</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="312"/>
      <source>Items that don’t match the filter will be dimmed.</source>
      <comment>ERD editor</comment>
      <translation>Elementy, które nie pasują do filtra, zostaną przyciemnione.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="448"/>
      <source>table name</source>
      <comment>ERD editor</comment>
      <translation>nazwa tabeli</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="450"/>
      <source>column name</source>
      <comment>ERD editor</comment>
      <translation>nazwa kolumny</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="570"/>
      <source>All changes have been successfully applied to the database.</source>
      <comment>ERD editor</comment>
      <translation>Wszystkie zmiany zostały pomyślnie zastosowane do bazy danych.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="578"/>
      <source>The changes were successfully committed. No modifications to the database schema were required.</source>
      <comment>ERD editor</comment>
      <translation>Zmiany zostały pomyślnie zatwierdzone. Nie były wymagane żadne zmiany w schemacie bazy danych.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="586"/>
      <source>Failed to apply changes to the database. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>Nie udało się zastosować zmian do bazy danych. Szczegóły: %1</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="650"/>
      <source>This action will discard all your pending changes and reload the diagram from the current database schema. The undo/redo history will be cleared. Do you want to proceed?</source>
      <translation>Ta operacja odrzuci wszystkie niezatwierdzone zmiany i ponownie wczyta diagram na podstawie bieżącego schematu bazy danych. Historia cofania i ponawiania zmian zostanie wyczyszczona. Czy chcesz kontynuować?</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="833"/>
      <source>ERD window &quot;%1&quot; has uncommitted changes.</source>
      <translation>Okno ERD &quot;%1&quot; ma niezatwierdzone zmiany.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="1145"/>
      <source>ERD editor (%1)</source>
      <translation>Edytor ERD (%1)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="1147"/>
      <source>ERD editor</source>
      <translation>Edytor ERD</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="181"/>
      <source>The number of changes pending for commit. Click to see details.</source>
      <comment>ERD editor</comment>
      <translation>Liczba zmian oczekujących na zatwierdzenie. Kliknij, aby zobaczyć szczegóły.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="190"/>
      <source>Add a foreign key</source>
      <comment>ERD editor</comment>
      <translation>Dodaj klucz obcy</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="192"/>
      <source>Delete selected items</source>
      <comment>ERD editor</comment>
      <translation>Usuń wybrane elementy</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="198"/>
      <source>Auto-arrange (local forces)</source>
      <comment>ERD editor</comment>
      <translation>Automatyczne rozmieszczanie (lokalne siły)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="199"/>
      <source>Auto-arrange (global balance)</source>
      <comment>ERD editor</comment>
      <translation>Automatyczne rozmieszczanie (globalna równowaga)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="213"/>
      <source>Set table color</source>
      <comment>ERD editor</comment>
      <translation>Ustaw kolor tabeli</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="241"/>
      <source>Use straight line</source>
      <comment>ERD editor</comment>
      <translation>Użyj linii prostej</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="242"/>
      <source>Use curvy line</source>
      <comment>ERD editor</comment>
      <translation>Użyj linii krzywej</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="243"/>
      <source>Use square line</source>
      <comment>ERD editor</comment>
      <translation>Użyj linii kwadratowej</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="254"/>
      <source>Choose line type</source>
      <comment>ERD editor</comment>
      <translation>Wybierz typ linii</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../changes/erdchangedeleteentity.cpp" line="48"/>
      <source>Drop table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>Usuń tabelę &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangemodifyentity.cpp" line="61"/>
      <source>Modify table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>Zmodyfikuj tabelę &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangenewentity.cpp" line="54"/>
      <source>Create table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>Utwórz tabelę &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdeffectivechangemerger.cpp" line="31"/>
      <source>Failed to create in-memory databases required for change compacting.</source>
      <translation>Nie udało się utworzyć baz danych w pamięci wymaganej do kompaktowania.</translation>
    </message>
    <message>
      <location filename="../changes/erdeffectivechangemerger.cpp" line="399"/>
      <source>Drop tables: %1</source>
      <comment>ERD editor</comment>
      <translation>Usuń tabele: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="149"/>
      <source>Could not commit changes for finalized ERD connection.</source>
      <translation>Nie udało się zatwierdzić zmian dla ukończonego połączenia ERD.</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="155"/>
      <source>Update relationship from &quot;%1&quot;-&quot;%2&quot; to &quot;%1&quot;-&quot;%3&quot;.</source>
      <translation>Zaktualizuj relację z &quot;%1&quot;-&quot;%2&quot; do &quot;%1&quot;-&quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="157"/>
      <source>Create relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>Modyfikuj relację między &quot;%1&quot; i &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangemoveentity.cpp" line="28"/>
      <source>Move table &quot;%1&quot;</source>
      <translation>Przesuń tabelę &quot;%1&quot;</translation>
    </message>
  </context>
</TS>

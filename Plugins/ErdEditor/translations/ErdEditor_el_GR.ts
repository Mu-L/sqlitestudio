<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="el" sourcelanguage="en">
  <context>
    <name>ErdChangeRegistryDialog</name>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="14"/>
      <source>Pending changes registry</source>
      <translation>Μητρώο εκκρεμών αλλαγών</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="65"/>
      <source>Pending changes</source>
      <translation>Εκκρεμείς αλλαγές</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="105"/>
      <source>DDL preview</source>
      <translation>Προεπισκόπηση DDL</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="143"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Shows the changes as they will be committed. Redundant or mutually cancelling steps are merged or removed from the list.&lt;br/&gt;When disabled, all individual undo and redo steps are shown.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Εμφανίζει τις αλλαγές όπως θα οριστικοποιηθούν. Περιττά ή αμοιβαία ακυρούμενα βήματα συγχωνεύονται ή αφαιρούνται από τη λίστα.&lt;br/&gt;Όταν είναι απενεργοποιημένο, εμφανίζονται όλα τα μεμονωμένα βήματα αναίρεσης και επανάληψης.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="146"/>
      <source>Show effective changes only</source>
      <translation>Εμφάνιση μόνο ουσιαστικών αλλαγών</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="153"/>
      <source>&lt;html&gt;&lt;body&gt;Shows changes that do not modify the database schema, but only affect the diagram (for example, table position changes). &lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;body&gt;Εμφανίζει αλλαγές που δεν τροποποιούν το σχήμα της βάσης δεδομένων, αλλά επηρεάζουν μόνο το διάγραμμα (για παράδειγμα, αλλαγές θέσης πινάκων). &lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="156"/>
      <source>Show non-schema changes</source>
      <translation>Εμφάνιση αλλαγών εκτός σχήματος</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.cpp" line="58"/>
      <source>-- This is a change applied only to the diagram. It has no database schema efects.</source>
      <comment>ERD editor</comment>
      <translation>-- Αυτή είναι μια αλλαγή που εφαρμόζεται μόνο στο διάγραμμα. Δεν έχει επιπτώσεις στο σχήμα της βάσης δεδομένων.</translation>
    </message>
  </context>
  <context>
    <name>ErdConfig</name>
    <message>
      <location filename="../erdconfig.ui" line="33"/>
      <source>Maximum number of tables for ERD editor</source>
      <translation>Μέγιστος αριθμός πινάκων για τον επεξεργαστή ERD</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="40"/>
      <source>Setting this value too high may cause the application to slow down or become unresponsive when opening the ERD editor.</source>
      <translation>Η ρύθμιση αυτής της τιμής πολύ υψηλά μπορεί να προκαλέσει επιβράδυνση της εφαρμογής ή να την κάνει να μην αποκρίνεται κατά το άνοιγμα του επεξεργαστή ERD.</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="56"/>
      <source>Starts panning as soon as the Space key is pressed, without requiring a mouse button press.</source>
      <translation>Ξεκινά τη μετακίνηση της προβολής μόλις πατηθεί το πλήκτρο διαστήματος, χωρίς να απαιτείται πάτημα κουμπιού του ποντικιού.</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="59"/>
      <source>Pan view with Space only</source>
      <translation>Μετακίνηση προβολής μόνο με το πλήκτρο διαστήματος</translation>
    </message>
  </context>
  <context>
    <name>ErdConnectionPanel</name>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="59"/>
      <source>Foreign key properties</source>
      <translation>Ιδιότητες εξωτερικού κλειδιού</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="83"/>
      <source>Composite relation (multiple columns)</source>
      <translation>Σύνθετη σχέση (πολλαπλές στήλες)</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="137"/>
      <source>Referencing (child) table:</source>
      <translation>Πίνακας αναφοράς (θυγατρικός):</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="156"/>
      <source>Referencing (child) column:</source>
      <translation>Στήλη αναφοράς (θυγατρική):</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="51"/>
      <source>ERD side panel for relation between tables &quot;%1&quot; and &quot;%2&quot; has uncommitted modifications.</source>
      <translation>Το πλευρικό πλαίσιο ERD για τη σχέση μεταξύ των πινάκων &quot;%1&quot; και &quot;%2&quot; έχει μη οριστικοποιημένες τροποποιήσεις.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="57"/>
      <source>Apply changes to diagram</source>
      <comment>ERD editor</comment>
      <translation>Εφαρμογή αλλαγών στο διάγραμμα</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="58"/>
      <source>Abort changes</source>
      <comment>ERD editor</comment>
      <translation>Ακύρωση αλλαγών</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="240"/>
      <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>Τροποποίηση της σχέσης μεταξύ &quot;%1&quot; και &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="242"/>
      <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot; - change target to &quot;%3&quot;.</source>
      <translation>Τροποποίηση της σχέσης μεταξύ &quot;%1&quot; και &quot;%2&quot; - αλλαγή προορισμού σε &quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="252"/>
      <source>Failed to execute DDL required for relation modification. Details: %1</source>
      <translation>Απέτυχε η εκτέλεση του DDL που απαιτείται για την τροποποίηση της σχέσης. Λεπτομέρειες: %1</translation>
    </message>
  </context>
  <context>
    <name>ErdEditorPlugin</name>
    <message>
      <location filename="../erdeditorplugin.cpp" line="20"/>
      <source>Open ERD editor</source>
      <translation>Άνοιγμα επεξεργαστή ERD</translation>
    </message>
    <message>
      <location filename="../erdeditorplugin.cpp" line="74"/>
      <source>ERD editor cannot open because the database contains %1 tables, exceeding the configured limit of %2 tables. You can increase this limit in the settings, but higher values may slow down or freeze the application.</source>
      <translation>Ο επεξεργαστής ERD δεν μπορεί να ανοίξει επειδή η βάση δεδομένων περιέχει %1 πίνακες, υπερβαίνοντας το διαμορφωμένο όριο των %2 πινάκων. Μπορείτε να αυξήσετε αυτό το όριο στις ρυθμίσεις, αλλά υψηλότερες τιμές μπορεί να επιβραδύνουν ή να παγώσουν την εφαρμογή.</translation>
    </message>
  </context>
  <context>
    <name>ErdScene</name>
    <message>
      <location filename="../scene/erdscene.cpp" line="530"/>
      <source>Delete multiple diagram elements.</source>
      <comment>ERD editor</comment>
      <translation>Διαγραφή πολλαπλών στοιχείων διαγράμματος.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="547"/>
      <source>Failed to execute the undo DDL. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>Απέτυχε η εκτέλεση του DDL αναίρεσης. Λεπτομέρειες: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="569"/>
      <source>Failed to execute the redo DDL. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>Απέτυχε η εκτέλεση του DDL επανάληψης. Λεπτομέρειες: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="596"/>
      <source>Failed to execute DDL required for table deletion. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>Απέτυχε η εκτέλεση του DDL που απαιτείται για τη διαγραφή πίνακα. Λεπτομέρειες: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="607"/>
      <source>Delete foreign key between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>Διαγραφή εξωτερικού κλειδιού μεταξύ &quot;%1&quot; και &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="616"/>
      <source>Failed to execute DDL required for foreign key deletion. Details: %1</source>
      <translation>Απέτυχε η εκτέλεση του DDL που απαιτείται για τη διαγραφή εξωτερικού κλειδιού. Λεπτομέρειες: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="824"/>
      <source>Arrange entities</source>
      <translation>Τακτοποίηση οντοτήτων</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="825"/>
      <source>Are you sure you want to automatically arrange the entities on the diagram? This action will overwrite the current layout, and any manual adjustments will be lost.</source>
      <translation>Είστε βέβαιοι ότι θέλετε να τακτοποιήσετε αυτόματα τις οντότητες στο διάγραμμα; Αυτή η ενέργεια θα αντικαταστήσει την τρέχουσα διάταξη και τυχόν μη αυτόματες προσαρμογές θα χαθούν.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="845"/>
      <source>Change color of table &quot;%1&quot; to %2.</source>
      <translation>Αλλαγή χρώματος του πίνακα &quot;%1&quot; σε %2.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="851"/>
      <source>Change color of multiple tables.</source>
      <translation>Αλλαγή χρώματος πολλαπλών πινάκων.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="696"/>
      <source>Apply diagram layout</source>
      <translation>Εφαρμογή διάταξης διαγράμματος</translation>
    </message>
  </context>
  <context>
    <name>ErdTableWindow</name>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="29"/>
      <source>Apply changes to diagram</source>
      <comment>ERD editor</comment>
      <translation>Εφαρμογή αλλαγών στο διάγραμμα</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="30"/>
      <source>Abort changes</source>
      <comment>ERD editor</comment>
      <translation>Ακύρωση αλλαγών</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="49"/>
      <source>ERD side panel for table &quot;%1&quot; has uncommitted modifications.</source>
      <translation>Το πλευρικό πλαίσιο ERD για τον πίνακα &quot;%1&quot; έχει μη οριστικοποιημένες τροποποιήσεις.</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="106"/>
      <source>Invalid table changes</source>
      <comment>ERD editor</comment>
      <translation>Μη έγκυρες αλλαγές πίνακα</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="108"/>
      <source>&lt;b&gt;The table contains invalid changes&lt;/b&gt;</source>
      <comment>ERD editor</comment>
      <translation>&lt;b&gt;Ο πίνακας περιέχει μη έγκυρες αλλαγές&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="109"/>
      <source>Some of the changes you made cannot be applied because they contain errors.&lt;br&gt;&lt;br&gt;&lt;b&gt;Errors:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;You can &lt;b&gt;return to editing&lt;/b&gt; and fix the problems, or &lt;b&gt;discard your changes&lt;/b&gt; and restore the previous state of the table.</source>
      <comment>ERD editor</comment>
      <translation>Ορισμένες από τις αλλαγές που κάνατε δεν μπορούν να εφαρμοστούν επειδή περιέχουν σφάλματα.&lt;br&gt;&lt;br&gt;&lt;b&gt;Σφάλματα:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;Μπορείτε να &lt;b&gt;επιστρέψετε στην επεξεργασία&lt;/b&gt; και να διορθώσετε τα προβλήματα ή να &lt;b&gt;απορρίψετε τις αλλαγές σας&lt;/b&gt; και να επαναφέρετε την προηγούμενη κατάσταση του πίνακα.</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="118"/>
      <source>Fix errors</source>
      <comment>ERD editor</comment>
      <translation>Διόρθωση σφαλμάτων</translation>
    </message>
  </context>
  <context>
    <name>ErdView</name>
    <message>
      <location filename="../scene/erdview.cpp" line="323"/>
      <source>Cannot edit compound foreign keys this way. Such connections have to be edited through the side panel.</source>
      <comment>ERD editor</comment>
      <translation>Δεν είναι δυνατή η επεξεργασία σύνθετων εξωτερικών κλειδιών με αυτόν τον τρόπο. Τέτοιες συνδέσεις πρέπει να επεξεργάζονται μέσω του πλευρικού πλαισίου.</translation>
    </message>
    <message>
      <location filename="../scene/erdview.cpp" line="633"/>
      <source>Move table &quot;%1&quot;</source>
      <translation>Μετακίνηση πίνακα &quot;%1&quot;</translation>
    </message>
    <message>
      <location filename="../scene/erdview.cpp" line="639"/>
      <source>Move tables: %1</source>
      <translation>Μετακίνηση πινάκων: %1</translation>
    </message>
  </context>
  <context>
    <name>ErdWindow</name>
    <message>
      <location filename="../erdwindow.ui" line="86"/>
      <source>Select an item to edit its properties</source>
      <translation>Επιλέξτε ένα στοιχείο για να επεξεργαστείτε τις ιδιότητές του</translation>
    </message>
    <message>
      <location filename="../erdwindow.ui" line="114"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Hold the Spacebar and drag with the mouse to pan the diagram freely without selecting any items.&lt;/p&gt;&lt;p&gt;- Use the mouse wheel to zoom in and out.&lt;/p&gt;&lt;p&gt;- Deselect the table (or click Commit in the side panel toolbar) to apply the side panel changes to the diagram.&lt;/p&gt;&lt;p&gt;- Press Esc (or click Rollback in the side panel toolbar) to discard the side panel changes.&lt;/p&gt;&lt;p&gt;- Double-Click on a table name or column to edit the name inline.&lt;/p&gt;&lt;p&gt;- Shift-Double-Click on a column to edit column details (datatype, constraints).&lt;/p&gt;&lt;p&gt;- To create a foreign key between table, click the middle mouse button on the table columns you want to connect.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;All diagram changes remain pending until you explicitly commit or roll them back&lt;/span&gt; using the toolbar buttons in the top-left corner of the diagram.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Learn more (click to open online help page)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Κρατήστε πατημένο το πλήκτρο διαστήματος και σύρετε με το ποντίκι για να μετακινήσετε ελεύθερα το διάγραμμα χωρίς να επιλέξετε στοιχεία.&lt;/p&gt;&lt;p&gt;- Χρησιμοποιήστε τον τροχό του ποντικιού για μεγέθυνση και σμίκρυνση.&lt;/p&gt;&lt;p&gt;- Αποεπιλέξτε τον πίνακα (ή κάντε κλικ στην Οριστικοποίηση στη γραμμή εργαλείων του πλευρικού πλαισίου) για να εφαρμόσετε τις αλλαγές του πλευρικού πλαισίου στο διάγραμμα.&lt;/p&gt;&lt;p&gt;- Πατήστε Esc (ή κάντε κλικ στην Επαναφορά στη γραμμή εργαλείων του πλευρικού πλαισίου) για να απορρίψετε τις αλλαγές του πλευρικού πλαισίου.&lt;/p&gt;&lt;p&gt;- Κάντε διπλό κλικ σε όνομα πίνακα ή στήλη για να επεξεργαστείτε το όνομα επιτόπου.&lt;/p&gt;&lt;p&gt;- Κάντε Shift-διπλό κλικ σε μια στήλη για να επεξεργαστείτε τις λεπτομέρειες της στήλης (τύπος δεδομένων, περιορισμοί).&lt;/p&gt;&lt;p&gt;- Για να δημιουργήσετε ένα εξωτερικό κλειδί μεταξύ πινάκων, κάντε κλικ με το μεσαίο κουμπί του ποντικιού στις στήλες των πινάκων που θέλετε να συνδέσετε.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;Όλες οι αλλαγές του διαγράμματος παραμένουν εκκρεμείς μέχρι να τις οριστικοποιήσετε ή να τις επαναφέρετε ρητά&lt;/span&gt; χρησιμοποιώντας τα κουμπιά της γραμμής εργαλείων στην επάνω αριστερή γωνία του διαγράμματος.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Μάθετε περισσότερα (κάντε κλικ για να ανοίξετε τη σελίδα ηλεκτρονικής βοήθειας)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="165"/>
      <source>Cancels ongoing action</source>
      <comment>ERD editor</comment>
      <translation>Ακυρώνει την τρέχουσα ενέργεια</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="166"/>
      <source>Create a table</source>
      <comment>ERD editor</comment>
      <translation>Δημιουργία πίνακα</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="168"/>
      <location filename="../erdwindow.cpp" line="649"/>
      <source>Reload schema</source>
      <comment>ERD editor</comment>
      <translation>Επαναφόρτωση σχήματος</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="169"/>
      <source>Commit all pending changes</source>
      <comment>ERD editor</comment>
      <translation>Οριστικοποίηση όλων των εκκρεμών αλλαγών</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="170"/>
      <source>Revert diagram to initial state</source>
      <comment>ERD editor</comment>
      <translation>Επαναφορά διαγράμματος στην αρχική κατάσταση</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="172"/>
      <source>Undo</source>
      <comment>ERD editor</comment>
      <translation>Αναίρεση</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="173"/>
      <source>Redo</source>
      <comment>ERD editor</comment>
      <translation>Επανάληψη</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="189"/>
      <source>Create a table</source>
      <translation>Δημιουργία πίνακα</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="202"/>
      <source>Select all</source>
      <translation>Επιλογή όλων</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="311"/>
      <source>Filter items</source>
      <comment>ERD editor</comment>
      <translation>Φιλτράρισμα στοιχείων</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="312"/>
      <source>Items that don’t match the filter will be dimmed.</source>
      <comment>ERD editor</comment>
      <translation>Τα στοιχεία που δεν ταιριάζουν με το φίλτρο θα εμφανίζονται αχνά.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="448"/>
      <source>table name</source>
      <comment>ERD editor</comment>
      <translation>όνομα πίνακα</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="450"/>
      <source>column name</source>
      <comment>ERD editor</comment>
      <translation>όνομα στήλης</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="570"/>
      <source>All changes have been successfully applied to the database.</source>
      <comment>ERD editor</comment>
      <translation>Όλες οι αλλαγές εφαρμόστηκαν με επιτυχία στη βάση δεδομένων.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="578"/>
      <source>The changes were successfully committed. No modifications to the database schema were required.</source>
      <comment>ERD editor</comment>
      <translation>Οι αλλαγές οριστικοποιήθηκαν με επιτυχία. Δεν απαιτήθηκαν τροποποιήσεις στο σχήμα της βάσης δεδομένων.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="586"/>
      <source>Failed to apply changes to the database. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>Απέτυχε η εφαρμογή αλλαγών στη βάση δεδομένων. Λεπτομέρειες: %1</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="650"/>
      <source>This action will discard all your pending changes and reload the diagram from the current database schema. The undo/redo history will be cleared. Do you want to proceed?</source>
      <translation>Αυτή η ενέργεια θα απορρίψει όλες τις εκκρεμείς αλλαγές σας και θα επαναφορτώσει το διάγραμμα από το τρέχον σχήμα της βάσης δεδομένων. Το ιστορικό αναίρεσης/επανάληψης θα εκκαθαριστεί. Θέλετε να συνεχίσετε;</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="833"/>
      <source>ERD window &quot;%1&quot; has uncommitted changes.</source>
      <translation>Το παράθυρο ERD &quot;%1&quot; έχει μη οριστικοποιημένες αλλαγές.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="1145"/>
      <source>ERD editor (%1)</source>
      <translation>Επεξεργαστής ERD (%1)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="1147"/>
      <source>ERD editor</source>
      <translation>Επεξεργαστής ERD</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="181"/>
      <source>The number of changes pending for commit. Click to see details.</source>
      <comment>ERD editor</comment>
      <translation>Ο αριθμός των αλλαγών που εκκρεμούν για οριστικοποίηση. Κάντε κλικ για να δείτε λεπτομέρειες.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="190"/>
      <source>Add a foreign key</source>
      <comment>ERD editor</comment>
      <translation>Προσθήκη εξωτερικού κλειδιού</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="192"/>
      <source>Delete selected items</source>
      <comment>ERD editor</comment>
      <translation>Διαγραφή επιλεγμένων στοιχείων</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="198"/>
      <source>Auto-arrange (local forces)</source>
      <comment>ERD editor</comment>
      <translation>Αυτόματη τακτοποίηση (τοπικές δυνάμεις)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="199"/>
      <source>Auto-arrange (global balance)</source>
      <comment>ERD editor</comment>
      <translation>Αυτόματη τακτοποίηση (καθολική ισορροπία)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="213"/>
      <source>Set table color</source>
      <comment>ERD editor</comment>
      <translation>Ορισμός χρώματος πίνακα</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="241"/>
      <source>Use straight line</source>
      <comment>ERD editor</comment>
      <translation>Χρήση ευθείας γραμμής</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="242"/>
      <source>Use curvy line</source>
      <comment>ERD editor</comment>
      <translation>Χρήση καμπύλης γραμμής</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="243"/>
      <source>Use square line</source>
      <comment>ERD editor</comment>
      <translation>Χρήση ορθογώνιας γραμμής</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="254"/>
      <source>Choose line type</source>
      <comment>ERD editor</comment>
      <translation>Επιλογή τύπου γραμμής</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../changes/erdchangedeleteentity.cpp" line="48"/>
      <source>Drop table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>Απόθεση πίνακα &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangemodifyentity.cpp" line="61"/>
      <source>Modify table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>Τροποποίηση πίνακα &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangenewentity.cpp" line="54"/>
      <source>Create table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>Δημιουργία πίνακα &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdeffectivechangemerger.cpp" line="31"/>
      <source>Failed to create in-memory databases required for change compacting.</source>
      <translation>Απέτυχε η δημιουργία βάσεων δεδομένων στη μνήμη που απαιτούνται για τη συμπύκνωση αλλαγών.</translation>
    </message>
    <message>
      <location filename="../changes/erdeffectivechangemerger.cpp" line="399"/>
      <source>Drop tables: %1</source>
      <comment>ERD editor</comment>
      <translation>Απόθεση πινάκων: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="149"/>
      <source>Could not commit changes for finalized ERD connection.</source>
      <translation>Δεν ήταν δυνατή η οριστικοποίηση αλλαγών για την ολοκληρωμένη σύνδεση ERD.</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="155"/>
      <source>Update relationship from &quot;%1&quot;-&quot;%2&quot; to &quot;%1&quot;-&quot;%3&quot;.</source>
      <translation>Ενημέρωση σχέσης από &quot;%1&quot;-&quot;%2&quot; σε &quot;%1&quot;-&quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="157"/>
      <source>Create relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>Δημιουργία σχέσης μεταξύ &quot;%1&quot; και &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangemoveentity.cpp" line="28"/>
      <source>Move table &quot;%1&quot;</source>
      <translation>Μετακίνηση πίνακα &quot;%1&quot;</translation>
    </message>
  </context>
</TS>

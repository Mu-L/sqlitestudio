<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ar" sourcelanguage="en">
  <context>
    <name>ErdChangeRegistryDialog</name>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="14"/>
      <source>Pending changes registry</source>
      <translation>سجلّ التغييرات المعلّقة</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="65"/>
      <source>Pending changes</source>
      <translation>التغييرات المعلّقة</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="105"/>
      <source>DDL preview</source>
      <translation>معاينة DDL</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="143"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Shows the changes as they will be committed. Redundant or mutually cancelling steps are merged or removed from the list.&lt;br/&gt;When disabled, all individual undo and redo steps are shown.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;يعرض التغييرات كما سيتم اعتمادها. يتم دمج الخطوات الزائدة أو التي تلغي بعضها بعضًا، أو إزالتها من القائمة.&lt;br/&gt;عند التعطيل، تُعرض كل خطوات التراجع والإعادة الفردية.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="146"/>
      <source>Show effective changes only</source>
      <translation>إظهار التغييرات الفعلية فقط</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="153"/>
      <source>&lt;html&gt;&lt;body&gt;Shows changes that do not modify the database schema, but only affect the diagram (for example, table position changes). &lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;body&gt;يعرض التغييرات التي لا تعدّل مخطط قاعدة البيانات، بل تؤثر فقط في المخطط التخطيطي (على سبيل المثال، تغييرات موضع الجدول). &lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="156"/>
      <source>Show non-schema changes</source>
      <translation>إظهار التغييرات غير المتعلقة بالمخطط</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.cpp" line="58"/>
      <source>-- This is a change applied only to the diagram. It has no database schema efects.</source>
      <comment>ERD editor</comment>
      <translation>-- هذا تغيير مطبّق على المخطط التخطيطي فقط. ليس له أي تأثيرات على مخطط قاعدة البيانات.</translation>
    </message>
  </context>
  <context>
    <name>ErdConfig</name>
    <message>
      <location filename="../erdconfig.ui" line="33"/>
      <source>Maximum number of tables for ERD editor</source>
      <translation>العدد الأقصى للجداول في محرر ERD</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="40"/>
      <source>Setting this value too high may cause the application to slow down or become unresponsive when opening the ERD editor.</source>
      <translation>قد يؤدي تعيين هذه القيمة على مستوى مرتفع جدًا إلى إبطاء التطبيق أو جعله غير مستجيب عند فتح محرر ERD.</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="56"/>
      <source>Starts panning as soon as the Space key is pressed, without requiring a mouse button press.</source>
      <translation>يبدأ التحريك بمجرد الضغط على مفتاح المسافة، دون الحاجة إلى الضغط على زر الماوس.</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="59"/>
      <source>Pan view with Space only</source>
      <translation>تحريك العرض بمفتاح المسافة فقط</translation>
    </message>
  </context>
  <context>
    <name>ErdConnectionPanel</name>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="59"/>
      <source>Foreign key properties</source>
      <translation>خصائص المفتاح الخارجي</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="83"/>
      <source>Composite relation (multiple columns)</source>
      <translation>علاقة مركّبة (أعمدة متعددة)</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="137"/>
      <source>Referencing (child) table:</source>
      <translation>الجدول المُشير (الفرعي):</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="156"/>
      <source>Referencing (child) column:</source>
      <translation>العمود المُشير (الفرعي):</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="51"/>
      <source>ERD side panel for relation between tables &quot;%1&quot; and &quot;%2&quot; has uncommitted modifications.</source>
      <translation>تحتوي اللوحة الجانبية لـ ERD للعلاقة بين الجدولين &quot;%1&quot; و&quot;%2&quot; على تعديلات غير معتمدة.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="57"/>
      <source>Apply changes to diagram</source>
      <comment>ERD editor</comment>
      <translation>تطبيق التغييرات على المخطط التخطيطي</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="58"/>
      <source>Abort changes</source>
      <comment>ERD editor</comment>
      <translation>إجهاض التغييرات</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="240"/>
      <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>تعديل العلاقة بين &quot;%1&quot; و&quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="242"/>
      <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot; - change target to &quot;%3&quot;.</source>
      <translation>تعديل العلاقة بين &quot;%1&quot; و&quot;%2&quot; - تغيير الهدف إلى &quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="252"/>
      <source>Failed to execute DDL required for relation modification. Details: %1</source>
      <translation>فشل تنفيذ DDL المطلوب لتعديل العلاقة. التفاصيل: %1</translation>
    </message>
  </context>
  <context>
    <name>ErdEditorPlugin</name>
    <message>
      <location filename="../erdeditorplugin.cpp" line="20"/>
      <source>Open ERD editor</source>
      <translation>فتح محرر ERD</translation>
    </message>
    <message>
      <location filename="../erdeditorplugin.cpp" line="74"/>
      <source>ERD editor cannot open because the database contains %1 tables, exceeding the configured limit of %2 tables. You can increase this limit in the settings, but higher values may slow down or freeze the application.</source>
      <translation>لا يمكن فتح محرر ERD لأن قاعدة البيانات تحتوي على %1 جدولًا، متجاوزةً الحد المكوّن البالغ %2 جدولًا. يمكنك زيادة هذا الحد في الإعدادات، لكن القيم الأعلى قد تبطئ التطبيق أو تجمّده.</translation>
    </message>
  </context>
  <context>
    <name>ErdScene</name>
    <message>
      <location filename="../scene/erdscene.cpp" line="530"/>
      <source>Delete multiple diagram elements.</source>
      <comment>ERD editor</comment>
      <translation>حذف عناصر متعددة من المخطط التخطيطي.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="547"/>
      <source>Failed to execute the undo DDL. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>فشل تنفيذ DDL الخاص بالتراجع. التفاصيل: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="569"/>
      <source>Failed to execute the redo DDL. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>فشل تنفيذ DDL الخاص بالإعادة. التفاصيل: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="596"/>
      <source>Failed to execute DDL required for table deletion. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>فشل تنفيذ DDL المطلوب لحذف الجدول. التفاصيل: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="607"/>
      <source>Delete foreign key between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>حذف المفتاح الخارجي بين &quot;%1&quot; و&quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="616"/>
      <source>Failed to execute DDL required for foreign key deletion. Details: %1</source>
      <translation>فشل تنفيذ DDL المطلوب لحذف المفتاح الخارجي. التفاصيل: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="824"/>
      <source>Arrange entities</source>
      <translation>ترتيب الكيانات</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="825"/>
      <source>Are you sure you want to automatically arrange the entities on the diagram? This action will overwrite the current layout, and any manual adjustments will be lost.</source>
      <translation>هل أنت متأكد من أنك تريد ترتيب الكيانات تلقائيًا على المخطط التخطيطي؟ سيؤدي هذا الإجراء إلى الكتابة فوق التخطيط الحالي، وستُفقد أي تعديلات يدوية.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="845"/>
      <source>Change color of table &quot;%1&quot; to %2.</source>
      <translation>تغيير لون الجدول &quot;%1&quot; إلى %2.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="851"/>
      <source>Change color of multiple tables.</source>
      <translation>تغيير لون جداول متعددة.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="696"/>
      <source>Apply diagram layout</source>
      <translation>تطبيق تخطيط المخطط التخطيطي</translation>
    </message>
  </context>
  <context>
    <name>ErdTableWindow</name>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="29"/>
      <source>Apply changes to diagram</source>
      <comment>ERD editor</comment>
      <translation>تطبيق التغييرات على المخطط التخطيطي</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="30"/>
      <source>Abort changes</source>
      <comment>ERD editor</comment>
      <translation>إجهاض التغييرات</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="49"/>
      <source>ERD side panel for table &quot;%1&quot; has uncommitted modifications.</source>
      <translation>تحتوي اللوحة الجانبية لـ ERD للجدول &quot;%1&quot; على تعديلات غير معتمدة.</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="106"/>
      <source>Invalid table changes</source>
      <comment>ERD editor</comment>
      <translation>تغييرات جدول غير صالحة</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="108"/>
      <source>&lt;b&gt;The table contains invalid changes&lt;/b&gt;</source>
      <comment>ERD editor</comment>
      <translation>&lt;b&gt;يحتوي الجدول على تغييرات غير صالحة&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="109"/>
      <source>Some of the changes you made cannot be applied because they contain errors.&lt;br&gt;&lt;br&gt;&lt;b&gt;Errors:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;You can &lt;b&gt;return to editing&lt;/b&gt; and fix the problems, or &lt;b&gt;discard your changes&lt;/b&gt; and restore the previous state of the table.</source>
      <comment>ERD editor</comment>
      <translation>لا يمكن تطبيق بعض التغييرات التي أجريتها لأنها تحتوي على أخطاء.&lt;br&gt;&lt;br&gt;&lt;b&gt;الأخطاء:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;يمكنك &lt;b&gt;العودة إلى التحرير&lt;/b&gt; وإصلاح المشكلات، أو &lt;b&gt;تجاهل تغييراتك&lt;/b&gt; واستعادة الحالة السابقة للجدول.</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="118"/>
      <source>Fix errors</source>
      <comment>ERD editor</comment>
      <translation>إصلاح الأخطاء</translation>
    </message>
  </context>
  <context>
    <name>ErdView</name>
    <message>
      <location filename="../scene/erdview.cpp" line="323"/>
      <source>Cannot edit compound foreign keys this way. Such connections have to be edited through the side panel.</source>
      <comment>ERD editor</comment>
      <translation>لا يمكن تحرير المفاتيح الخارجية المركّبة بهذه الطريقة. يجب تحرير مثل هذه الاتصالات عبر اللوحة الجانبية.</translation>
    </message>
    <message>
      <location filename="../scene/erdview.cpp" line="633"/>
      <source>Move table &quot;%1&quot;</source>
      <translation>نقل الجدول &quot;%1&quot;</translation>
    </message>
    <message>
      <location filename="../scene/erdview.cpp" line="639"/>
      <source>Move tables: %1</source>
      <translation>نقل الجداول: %1</translation>
    </message>
  </context>
  <context>
    <name>ErdWindow</name>
    <message>
      <location filename="../erdwindow.ui" line="86"/>
      <source>Select an item to edit its properties</source>
      <translation>حدد عنصرًا لتحرير خصائصه</translation>
    </message>
    <message>
      <location filename="../erdwindow.ui" line="114"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Hold the Spacebar and drag with the mouse to pan the diagram freely without selecting any items.&lt;/p&gt;&lt;p&gt;- Use the mouse wheel to zoom in and out.&lt;/p&gt;&lt;p&gt;- Deselect the table (or click Commit in the side panel toolbar) to apply the side panel changes to the diagram.&lt;/p&gt;&lt;p&gt;- Press Esc (or click Rollback in the side panel toolbar) to discard the side panel changes.&lt;/p&gt;&lt;p&gt;- Double-Click on a table name or column to edit the name inline.&lt;/p&gt;&lt;p&gt;- Shift-Double-Click on a column to edit column details (datatype, constraints).&lt;/p&gt;&lt;p&gt;- To create a foreign key between table, click the middle mouse button on the table columns you want to connect.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;All diagram changes remain pending until you explicitly commit or roll them back&lt;/span&gt; using the toolbar buttons in the top-left corner of the diagram.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Learn more (click to open online help page)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- اضغط مع الاستمرار على مفتاح المسافة واسحب بالماوس لتحريك المخطط التخطيطي بحرية دون تحديد أي عناصر.&lt;/p&gt;&lt;p&gt;- استخدم عجلة الماوس للتكبير والتصغير.&lt;/p&gt;&lt;p&gt;- ألغِ تحديد الجدول (أو انقر على اعتماد في شريط أدوات اللوحة الجانبية) لتطبيق تغييرات اللوحة الجانبية على المخطط التخطيطي.&lt;/p&gt;&lt;p&gt;- اضغط على Esc (أو انقر على تراجع في شريط أدوات اللوحة الجانبية) لتجاهل تغييرات اللوحة الجانبية.&lt;/p&gt;&lt;p&gt;- انقر نقرًا مزدوجًا على اسم جدول أو عمود لتحرير الاسم ضمنيًا.&lt;/p&gt;&lt;p&gt;- انقر نقرًا مزدوجًا مع Shift على عمود لتحرير تفاصيل العمود (نوع البيانات، القيود).&lt;/p&gt;&lt;p&gt;- لإنشاء مفتاح خارجي بين جدولين، انقر بزر الماوس الأوسط على أعمدة الجدول التي تريد توصيلها.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;تظل كل تغييرات المخطط التخطيطي معلّقة إلى أن تعتمدها أو تتراجع عنها صراحةً&lt;/span&gt; باستخدام أزرار شريط الأدوات في الزاوية العلوية اليسرى من المخطط التخطيطي.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;تعرّف على المزيد (انقر لفتح صفحة المساعدة عبر الإنترنت)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="165"/>
      <source>Cancels ongoing action</source>
      <comment>ERD editor</comment>
      <translation>يلغي الإجراء الجاري</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="166"/>
      <source>Create a table</source>
      <comment>ERD editor</comment>
      <translation>إنشاء جدول</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="168"/>
      <location filename="../erdwindow.cpp" line="649"/>
      <source>Reload schema</source>
      <comment>ERD editor</comment>
      <translation>إعادة تحميل المخطط</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="169"/>
      <source>Commit all pending changes</source>
      <comment>ERD editor</comment>
      <translation>اعتماد كل التغييرات المعلّقة</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="170"/>
      <source>Revert diagram to initial state</source>
      <comment>ERD editor</comment>
      <translation>إرجاع المخطط التخطيطي إلى حالته الأولية</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="172"/>
      <source>Undo</source>
      <comment>ERD editor</comment>
      <translation>تراجع</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="173"/>
      <source>Redo</source>
      <comment>ERD editor</comment>
      <translation>إعادة</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="189"/>
      <source>Create a table</source>
      <translation>إنشاء جدول</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="202"/>
      <source>Select all</source>
      <translation>تحديد الكل</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="311"/>
      <source>Filter items</source>
      <comment>ERD editor</comment>
      <translation>تصفية العناصر</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="312"/>
      <source>Items that don’t match the filter will be dimmed.</source>
      <comment>ERD editor</comment>
      <translation>سيتم تعتيم العناصر التي لا تطابق عامل التصفية.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="448"/>
      <source>table name</source>
      <comment>ERD editor</comment>
      <translation>اسم الجدول</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="450"/>
      <source>column name</source>
      <comment>ERD editor</comment>
      <translation>اسم العمود</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="570"/>
      <source>All changes have been successfully applied to the database.</source>
      <comment>ERD editor</comment>
      <translation>تم تطبيق كل التغييرات على قاعدة البيانات بنجاح.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="578"/>
      <source>The changes were successfully committed. No modifications to the database schema were required.</source>
      <comment>ERD editor</comment>
      <translation>تم اعتماد التغييرات بنجاح. لم تكن هناك حاجة إلى أي تعديلات على مخطط قاعدة البيانات.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="586"/>
      <source>Failed to apply changes to the database. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>فشل تطبيق التغييرات على قاعدة البيانات. التفاصيل: %1</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="650"/>
      <source>This action will discard all your pending changes and reload the diagram from the current database schema. The undo/redo history will be cleared. Do you want to proceed?</source>
      <translation>سيؤدي هذا الإجراء إلى تجاهل كل تغييراتك المعلّقة وإعادة تحميل المخطط التخطيطي من مخطط قاعدة البيانات الحالي. سيتم مسح سجل التراجع/الإعادة. هل تريد المتابعة؟</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="833"/>
      <source>ERD window &quot;%1&quot; has uncommitted changes.</source>
      <translation>تحتوي نافذة ERD &quot;%1&quot; على تغييرات غير معتمدة.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="1145"/>
      <source>ERD editor (%1)</source>
      <translation>محرر ERD (%1)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="1147"/>
      <source>ERD editor</source>
      <translation>محرر ERD</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="181"/>
      <source>The number of changes pending for commit. Click to see details.</source>
      <comment>ERD editor</comment>
      <translation>عدد التغييرات المعلّقة للاعتماد. انقر للاطلاع على التفاصيل.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="190"/>
      <source>Add a foreign key</source>
      <comment>ERD editor</comment>
      <translation>إضافة مفتاح خارجي</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="192"/>
      <source>Delete selected items</source>
      <comment>ERD editor</comment>
      <translation>حذف العناصر المحددة</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="198"/>
      <source>Auto-arrange (local forces)</source>
      <comment>ERD editor</comment>
      <translation>ترتيب تلقائي (قوى محلية)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="199"/>
      <source>Auto-arrange (global balance)</source>
      <comment>ERD editor</comment>
      <translation>ترتيب تلقائي (توازن عام)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="213"/>
      <source>Set table color</source>
      <comment>ERD editor</comment>
      <translation>تعيين لون الجدول</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="241"/>
      <source>Use straight line</source>
      <comment>ERD editor</comment>
      <translation>استخدام خط مستقيم</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="242"/>
      <source>Use curvy line</source>
      <comment>ERD editor</comment>
      <translation>استخدام خط منحني</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="243"/>
      <source>Use square line</source>
      <comment>ERD editor</comment>
      <translation>استخدام خط بزاويا قائمة</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="254"/>
      <source>Choose line type</source>
      <comment>ERD editor</comment>
      <translation>اختيار نوع الخط</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../changes/erdchangedeleteentity.cpp" line="48"/>
      <source>Drop table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>إسقاط الجدول &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangemodifyentity.cpp" line="61"/>
      <source>Modify table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>تعديل الجدول &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangenewentity.cpp" line="54"/>
      <source>Create table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>إنشاء الجدول &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdeffectivechangemerger.cpp" line="31"/>
      <source>Failed to create in-memory databases required for change compacting.</source>
      <translation>فشل إنشاء قواعد البيانات في الذاكرة المطلوبة لضغط التغييرات.</translation>
    </message>
    <message>
      <location filename="../changes/erdeffectivechangemerger.cpp" line="399"/>
      <source>Drop tables: %1</source>
      <comment>ERD editor</comment>
      <translation>إسقاط الجداول: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="149"/>
      <source>Could not commit changes for finalized ERD connection.</source>
      <translation>تعذّر اعتماد التغييرات لاتصال ERD المُنجز.</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="155"/>
      <source>Update relationship from &quot;%1&quot;-&quot;%2&quot; to &quot;%1&quot;-&quot;%3&quot;.</source>
      <translation>تحديث العلاقة من &quot;%1&quot;-&quot;%2&quot; إلى &quot;%1&quot;-&quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="157"/>
      <source>Create relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>إنشاء علاقة بين &quot;%1&quot; و&quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangemoveentity.cpp" line="28"/>
      <source>Move table &quot;%1&quot;</source>
      <translation>نقل الجدول &quot;%1&quot;</translation>
    </message>
  </context>
</TS>

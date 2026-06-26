<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fa" sourcelanguage="en">
<context>
    <name>ErdChangeRegistryDialog</name>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="14"/>
        <source>Pending changes registry</source>
        <translation>ثبت تغییرات در انتظار</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="65"/>
        <source>Pending changes</source>
        <translation>تغییرات در انتظار</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="105"/>
        <source>DDL preview</source>
        <translation>پیش‌نمایش DDL</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="143"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Shows the changes as they will be committed. Redundant or mutually cancelling steps are merged or removed from the list.&lt;br/&gt;When disabled, all individual undo and redo steps are shown.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;تغییرات را همان‌گونه که ثبت خواهند شد نشان می‌دهد. گام‌های زائد یا گام‌هایی که اثر یکدیگر را خنثی می‌کنند، ادغام یا از فهرست حذف می‌شوند.&lt;br/&gt;وقتی غیرفعال باشد، همهٔ گام‌های جداگانهٔ واگرد و انجام دوباره نشان داده می‌شوند.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="146"/>
        <source>Show effective changes only</source>
        <translation>فقط تغییرات مؤثر را نشان بده</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="153"/>
        <source>&lt;html&gt;&lt;body&gt;Shows changes that do not modify the database schema, but only affect the diagram (for example, table position changes). &lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;body&gt;تغییراتی را نشان می‌دهد که شِمای پایگاه داده را تغییر نمی‌دهند و فقط روی نمودار اثر می‌گذارند (برای مثال، تغییرات موقعیت جدول). &lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="156"/>
        <source>Show non-schema changes</source>
        <translation>نمایش تغییرات غیرمرتبط با شِما</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.cpp" line="58"/>
        <source>-- This is a change applied only to the diagram. It has no database schema efects.</source>
        <comment>ERD editor</comment>
        <translation>-- این تغییری است که فقط روی نمودار اعمال شده است. هیچ اثری بر شِمای پایگاه داده ندارد.</translation>
    </message>
</context>
<context>
    <name>ErdConfig</name>
    <message>
        <location filename="../erdconfig.ui" line="33"/>
        <source>Maximum number of tables for ERD editor</source>
        <translation>حداکثر تعداد جدول‌ها برای ویرایشگر ERD</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="40"/>
        <source>Setting this value too high may cause the application to slow down or become unresponsive when opening the ERD editor.</source>
        <translation>تنظیم این مقدار به‌صورت بیش از حد بالا ممکن است هنگام باز کردن ویرایشگر ERD باعث کند شدن برنامه یا پاسخ‌گو نبودن آن شود.</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="56"/>
        <source>Starts panning as soon as the Space key is pressed, without requiring a mouse button press.</source>
        <translation>به‌محض فشرده شدن کلید فاصله، بدون نیاز به فشردن دکمهٔ ماوس، حرکت‌دادن نما را آغاز می‌کند.</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="59"/>
        <source>Pan view with Space only</source>
        <translation>حرکت‌دادن نما فقط با کلید فاصله</translation>
    </message>
</context>
<context>
    <name>ErdConnectionPanel</name>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="59"/>
        <source>Foreign key properties</source>
        <translation>ویژگی‌های کلید خارجی</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="83"/>
        <source>Composite relation (multiple columns)</source>
        <translation>رابطهٔ مرکب (چند ستون)</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="137"/>
        <source>Referencing (child) table:</source>
        <translation>جدول ارجاع‌دهنده (فرزند):</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="156"/>
        <source>Referencing (child) column:</source>
        <translation>ستون ارجاع‌دهنده (فرزند):</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="51"/>
        <source>ERD side panel for relation between tables &quot;%1&quot; and &quot;%2&quot; has uncommitted modifications.</source>
        <translation>پنل جانبی ERD برای رابطهٔ بین جدول‌های &quot;%1&quot; و &quot;%2&quot; دارای تغییرات ثبت‌نشده است.</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="57"/>
        <source>Apply changes to diagram</source>
        <comment>ERD editor</comment>
        <translation>اعمال تغییرات به نمودار</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="58"/>
        <source>Abort changes</source>
        <comment>ERD editor</comment>
        <translation>لغو تغییرات</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="240"/>
        <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>تغییر رابطهٔ بین &quot;%1&quot; و &quot;%2&quot;.</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="242"/>
        <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot; - change target to &quot;%3&quot;.</source>
        <translation>تغییر رابطهٔ بین &quot;%1&quot; و &quot;%2&quot; - تغییر مقصد به &quot;%3&quot;.</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="252"/>
        <source>Failed to execute DDL required for relation modification. Details: %1</source>
        <translation>اجرای DDL مورد نیاز برای تغییر رابطه ناموفق بود. جزئیات: %1</translation>
    </message>
</context>
<context>
    <name>ErdEditorPlugin</name>
    <message>
        <location filename="../erdeditorplugin.cpp" line="20"/>
        <source>Open ERD editor</source>
        <translation>باز کردن ویرایشگر ERD</translation>
    </message>
    <message>
        <location filename="../erdeditorplugin.cpp" line="74"/>
        <source>ERD editor cannot open because the database contains %1 tables, exceeding the configured limit of %2 tables. You can increase this limit in the settings, but higher values may slow down or freeze the application.</source>
        <translation>ویرایشگر ERD نمی‌تواند باز شود، زیرا پایگاه داده شامل %1 جدول است که از حد پیکربندی‌شدهٔ %2 جدول فراتر می‌رود. می‌توانید این حد را در تنظیمات افزایش دهید، اما مقادیر بالاتر ممکن است برنامه را کند یا متوقف کند.</translation>
    </message>
</context>
<context>
    <name>ErdScene</name>
    <message>
        <location filename="../scene/erdscene.cpp" line="530"/>
        <source>Delete multiple diagram elements.</source>
        <comment>ERD editor</comment>
        <translation>حذف چند عنصر نمودار.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="547"/>
        <source>Failed to execute the undo DDL. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>اجرای DDL مربوط به واگرد ناموفق بود. جزئیات: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="569"/>
        <source>Failed to execute the redo DDL. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>اجرای DDL مربوط به انجام دوباره ناموفق بود. جزئیات: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="596"/>
        <source>Failed to execute DDL required for table deletion. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>اجرای DDL مورد نیاز برای حذف جدول ناموفق بود. جزئیات: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="607"/>
        <source>Delete foreign key between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>حذف کلید خارجی بین &quot;%1&quot; و &quot;%2&quot;.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="616"/>
        <source>Failed to execute DDL required for foreign key deletion. Details: %1</source>
        <translation>اجرای DDL مورد نیاز برای حذف کلید خارجی ناموفق بود. جزئیات: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="824"/>
        <source>Arrange entities</source>
        <translation>چیدمان موجودیت‌ها</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="825"/>
        <source>Are you sure you want to automatically arrange the entities on the diagram? This action will overwrite the current layout, and any manual adjustments will be lost.</source>
        <translation>آیا مطمئن هستید که می‌خواهید موجودیت‌های روی نمودار را به‌طور خودکار بچینید؟ این عمل چیدمان فعلی را بازنویسی می‌کند و هرگونه تنظیم دستی از بین خواهد رفت.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="845"/>
        <source>Change color of table &quot;%1&quot; to %2.</source>
        <translation>تغییر رنگ جدول &quot;%1&quot; به %2.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="851"/>
        <source>Change color of multiple tables.</source>
        <translation>تغییر رنگ چند جدول.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="696"/>
        <source>Apply diagram layout</source>
        <translation>اعمال چیدمان نمودار</translation>
    </message>
</context>
<context>
    <name>ErdTableWindow</name>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="29"/>
        <source>Apply changes to diagram</source>
        <comment>ERD editor</comment>
        <translation>اعمال تغییرات به نمودار</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="30"/>
        <source>Abort changes</source>
        <comment>ERD editor</comment>
        <translation>لغو تغییرات</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="49"/>
        <source>ERD side panel for table &quot;%1&quot; has uncommitted modifications.</source>
        <translation>پنل جانبی ERD برای جدول &quot;%1&quot; دارای تغییرات ثبت‌نشده است.</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="106"/>
        <source>Invalid table changes</source>
        <comment>ERD editor</comment>
        <translation>تغییرات نامعتبر جدول</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="108"/>
        <source>&lt;b&gt;The table contains invalid changes&lt;/b&gt;</source>
        <comment>ERD editor</comment>
        <translation>&lt;b&gt;جدول حاوی تغییرات نامعتبر است&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="109"/>
        <source>Some of the changes you made cannot be applied because they contain errors.&lt;br&gt;&lt;br&gt;&lt;b&gt;Errors:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;You can &lt;b&gt;return to editing&lt;/b&gt; and fix the problems, or &lt;b&gt;discard your changes&lt;/b&gt; and restore the previous state of the table.</source>
        <comment>ERD editor</comment>
        <translation>برخی از تغییراتی که انجام داده‌اید قابل اعمال نیستند، زیرا دارای خطا هستند.&lt;br&gt;&lt;br&gt;&lt;b&gt;خطاها:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;می‌توانید &lt;b&gt;به ویرایش بازگردید&lt;/b&gt; و مشکلات را برطرف کنید، یا &lt;b&gt;تغییرات خود را دور بیندازید&lt;/b&gt; و وضعیت قبلی جدول را بازیابی کنید.</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="118"/>
        <source>Fix errors</source>
        <comment>ERD editor</comment>
        <translation>رفع خطاها</translation>
    </message>
</context>
<context>
    <name>ErdView</name>
    <message>
        <location filename="../scene/erdview.cpp" line="323"/>
        <source>Cannot edit compound foreign keys this way. Such connections have to be edited through the side panel.</source>
        <comment>ERD editor</comment>
        <translation>نمی‌توان کلیدهای خارجی مرکب را به این روش ویرایش کرد. چنین اتصال‌هایی باید از طریق پنل جانبی ویرایش شوند.</translation>
    </message>
    <message>
        <location filename="../scene/erdview.cpp" line="633"/>
        <source>Move table &quot;%1&quot;</source>
        <translation>جابجایی جدول &quot;%1&quot;</translation>
    </message>
    <message>
        <location filename="../scene/erdview.cpp" line="639"/>
        <source>Move tables: %1</source>
        <translation>جابجایی جدول‌ها: %1</translation>
    </message>
</context>
<context>
    <name>ErdWindow</name>
    <message>
        <location filename="../erdwindow.ui" line="86"/>
        <source>Select an item to edit its properties</source>
        <translation>موردی را برای ویرایش ویژگی‌های آن انتخاب کنید</translation>
    </message>
    <message>
        <location filename="../erdwindow.ui" line="114"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Hold the Spacebar and drag with the mouse to pan the diagram freely without selecting any items.&lt;/p&gt;&lt;p&gt;- Use the mouse wheel to zoom in and out.&lt;/p&gt;&lt;p&gt;- Deselect the table (or click Commit in the side panel toolbar) to apply the side panel changes to the diagram.&lt;/p&gt;&lt;p&gt;- Press Esc (or click Rollback in the side panel toolbar) to discard the side panel changes.&lt;/p&gt;&lt;p&gt;- Double-Click on a table name or column to edit the name inline.&lt;/p&gt;&lt;p&gt;- Shift-Double-Click on a column to edit column details (datatype, constraints).&lt;/p&gt;&lt;p&gt;- To create a foreign key between table, click the middle mouse button on the table columns you want to connect.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;All diagram changes remain pending until you explicitly commit or roll them back&lt;/span&gt; using the toolbar buttons in the top-left corner of the diagram.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Learn more (click to open online help page)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- کلید فاصله را نگه دارید و با ماوس بکشید تا نمودار را آزادانه و بدون انتخاب هیچ موردی جابه‌جا کنید.&lt;/p&gt;&lt;p&gt;- از چرخ ماوس برای بزرگ‌نمایی و کوچک‌نمایی استفاده کنید.&lt;/p&gt;&lt;p&gt;- جدول را از انتخاب خارج کنید (یا در نوار ابزار پنل جانبی روی ثبت کلیک کنید) تا تغییرات پنل جانبی روی نمودار اعمال شود.&lt;/p&gt;&lt;p&gt;- Esc را فشار دهید (یا در نوار ابزار پنل جانبی روی بازگردانی کلیک کنید) تا تغییرات پنل جانبی دور انداخته شود.&lt;/p&gt;&lt;p&gt;- روی نام جدول یا ستون دوبار کلیک کنید تا نام را به‌صورت درون‌خطی ویرایش کنید.&lt;/p&gt;&lt;p&gt;- روی یک ستون با Shift و دوبارکلیک، جزئیات ستون (نوع داده، محدودیت‌ها) را ویرایش کنید.&lt;/p&gt;&lt;p&gt;- برای ایجاد یک کلید خارجی بین جدول‌ها، روی ستون‌های جدولی که می‌خواهید متصل کنید با دکمهٔ میانی ماوس کلیک کنید.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;همهٔ تغییرات نمودار تا زمانی که آن‌ها را صراحتاً ثبت یا بازگردانی نکنید، در انتظار باقی می‌مانند&lt;/span&gt;؛ این کار با استفاده از دکمه‌های نوار ابزار در گوشهٔ بالا-چپ نمودار انجام می‌شود.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;بیشتر بدانید (برای باز کردن صفحهٔ راهنمای آنلاین کلیک کنید)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="165"/>
        <source>Cancels ongoing action</source>
        <comment>ERD editor</comment>
        <translation>عمل در حال انجام را لغو می‌کند</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="166"/>
        <source>Create a table</source>
        <comment>ERD editor</comment>
        <translation>ایجاد یک جدول</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="168"/>
        <location filename="../erdwindow.cpp" line="649"/>
        <source>Reload schema</source>
        <comment>ERD editor</comment>
        <translation>بارگذاری دوبارهٔ شِما</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="169"/>
        <source>Commit all pending changes</source>
        <comment>ERD editor</comment>
        <translation>ثبت همهٔ تغییرات در انتظار</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="170"/>
        <source>Revert diagram to initial state</source>
        <comment>ERD editor</comment>
        <translation>بازگرداندن نمودار به وضعیت اولیه</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="172"/>
        <source>Undo</source>
        <comment>ERD editor</comment>
        <translation>واگرد</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="173"/>
        <source>Redo</source>
        <comment>ERD editor</comment>
        <translation>انجام دوباره</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="189"/>
        <source>Create a table</source>
        <translation>ایجاد یک جدول</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="202"/>
        <source>Select all</source>
        <translation>انتخاب همه</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="311"/>
        <source>Filter items</source>
        <comment>ERD editor</comment>
        <translation>فیلتر کردن موارد</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="312"/>
        <source>Items that don’t match the filter will be dimmed.</source>
        <comment>ERD editor</comment>
        <translation>مواردی که با فیلتر مطابقت ندارند کم‌رنگ خواهند شد.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="448"/>
        <source>table name</source>
        <comment>ERD editor</comment>
        <translation>نام جدول</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="450"/>
        <source>column name</source>
        <comment>ERD editor</comment>
        <translation>نام ستون</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="570"/>
        <source>All changes have been successfully applied to the database.</source>
        <comment>ERD editor</comment>
        <translation>همهٔ تغییرات با موفقیت به پایگاه داده اعمال شدند.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="578"/>
        <source>The changes were successfully committed. No modifications to the database schema were required.</source>
        <comment>ERD editor</comment>
        <translation>تغییرات با موفقیت ثبت شدند. هیچ تغییری در شِمای پایگاه داده لازم نبود.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="586"/>
        <source>Failed to apply changes to the database. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>اعمال تغییرات به پایگاه داده ناموفق بود. جزئیات: %1</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="650"/>
        <source>This action will discard all your pending changes and reload the diagram from the current database schema. The undo/redo history will be cleared. Do you want to proceed?</source>
        <translation>این عمل همهٔ تغییرات در انتظار شما را دور می‌اندازد و نمودار را از شِمای فعلی پایگاه داده دوباره بارگذاری می‌کند. تاریخچهٔ واگرد/انجام دوباره پاک خواهد شد. آیا می‌خواهید ادامه دهید؟</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="833"/>
        <source>ERD window &quot;%1&quot; has uncommitted changes.</source>
        <translation>پنجرهٔ ERD &quot;%1&quot; دارای تغییرات ثبت‌نشده است.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="1145"/>
        <source>ERD editor (%1)</source>
        <translation>ویرایشگر ERD (%1)</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="1147"/>
        <source>ERD editor</source>
        <translation>ویرایشگر ERD</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="181"/>
        <source>The number of changes pending for commit. Click to see details.</source>
        <comment>ERD editor</comment>
        <translation>تعداد تغییرات در انتظار ثبت. برای دیدن جزئیات کلیک کنید.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="190"/>
        <source>Add a foreign key</source>
        <comment>ERD editor</comment>
        <translation>افزودن یک کلید خارجی</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="192"/>
        <source>Delete selected items</source>
        <comment>ERD editor</comment>
        <translation>حذف موارد انتخاب‌شده</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="198"/>
        <source>Auto-arrange (local forces)</source>
        <comment>ERD editor</comment>
        <translation>چیدمان خودکار (نیروهای محلی)</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="199"/>
        <source>Auto-arrange (global balance)</source>
        <comment>ERD editor</comment>
        <translation>چیدمان خودکار (تعادل سراسری)</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="213"/>
        <source>Set table color</source>
        <comment>ERD editor</comment>
        <translation>تنظیم رنگ جدول</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="241"/>
        <source>Use straight line</source>
        <comment>ERD editor</comment>
        <translation>استفاده از خط مستقیم</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="242"/>
        <source>Use curvy line</source>
        <comment>ERD editor</comment>
        <translation>استفاده از خط خمیده</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="243"/>
        <source>Use square line</source>
        <comment>ERD editor</comment>
        <translation>استفاده از خط گوشه‌دار</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="254"/>
        <source>Choose line type</source>
        <comment>ERD editor</comment>
        <translation>انتخاب نوع خط</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../changes/erdchangedeleteentity.cpp" line="48"/>
        <source>Drop table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>حذف جدول &quot;%1&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdchangemodifyentity.cpp" line="61"/>
        <source>Modify table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>تغییر جدول &quot;%1&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdchangenewentity.cpp" line="54"/>
        <source>Create table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>ایجاد جدول &quot;%1&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdeffectivechangemerger.cpp" line="31"/>
        <source>Failed to create in-memory databases required for change compacting.</source>
        <translation>ایجاد پایگاه‌های دادهٔ درون‌حافظه‌ای مورد نیاز برای فشرده‌سازی تغییرات ناموفق بود.</translation>
    </message>
    <message>
        <location filename="../changes/erdeffectivechangemerger.cpp" line="399"/>
        <source>Drop tables: %1</source>
        <comment>ERD editor</comment>
        <translation>حذف جدول‌ها: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="149"/>
        <source>Could not commit changes for finalized ERD connection.</source>
        <translation>ثبت تغییرات برای اتصال نهایی‌شدهٔ ERD ممکن نبود.</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="155"/>
        <source>Update relationship from &quot;%1&quot;-&quot;%2&quot; to &quot;%1&quot;-&quot;%3&quot;.</source>
        <translation>به‌روزرسانی رابطه از &quot;%1&quot;-&quot;%2&quot; به &quot;%1&quot;-&quot;%3&quot;.</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="157"/>
        <source>Create relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>ایجاد رابطه بین &quot;%1&quot; و &quot;%2&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdchangemoveentity.cpp" line="28"/>
        <source>Move table &quot;%1&quot;</source>
        <translation>جابجایی جدول &quot;%1&quot;</translation>
    </message>
</context>
</TS>

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="uk" sourcelanguage="en">
<context>
    <name>ErdChangeRegistryDialog</name>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="14"/>
        <source>Pending changes registry</source>
        <translation>Реєстр змін, що очікують</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="65"/>
        <source>Pending changes</source>
        <translation>Зміни, що очікують</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="105"/>
        <source>DDL preview</source>
        <translation>Попередній перегляд DDL</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="143"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Shows the changes as they will be committed. Redundant or mutually cancelling steps are merged or removed from the list.&lt;br/&gt;When disabled, all individual undo and redo steps are shown.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Показує зміни в тому вигляді, у якому їх буде зафіксовано. Надлишкові або взаємно скасовувальні кроки об’єднуються або видаляються зі списку.&lt;br/&gt;Якщо вимкнено, показуються всі окремі кроки скасування та повторення.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="146"/>
        <source>Show effective changes only</source>
        <translation>Показувати лише ефективні зміни</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="153"/>
        <source>&lt;html&gt;&lt;body&gt;Shows changes that do not modify the database schema, but only affect the diagram (for example, table position changes). &lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;body&gt;Показує зміни, які не змінюють схему бази даних, а впливають лише на діаграму (наприклад, зміни положення таблиць). &lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="156"/>
        <source>Show non-schema changes</source>
        <translation>Показувати зміни поза схемою</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.cpp" line="58"/>
        <source>-- This is a change applied only to the diagram. It has no database schema efects.</source>
        <comment>ERD editor</comment>
        <translation>-- Це зміна, застосована лише до діаграми. Вона не впливає на схему бази даних.</translation>
    </message>
</context>
<context>
    <name>ErdConfig</name>
    <message>
        <location filename="../erdconfig.ui" line="33"/>
        <source>Maximum number of tables for ERD editor</source>
        <translation>Максимальна кількість таблиць для редактора ERD</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="40"/>
        <source>Setting this value too high may cause the application to slow down or become unresponsive when opening the ERD editor.</source>
        <translation>Установлення надто високого значення може призвести до уповільнення роботи застосунку або його зависання під час відкриття редактора ERD.</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="56"/>
        <source>Starts panning as soon as the Space key is pressed, without requiring a mouse button press.</source>
        <translation>Починає панорамування, щойно натиснуто клавішу Пробіл, без потреби натискати кнопку миші.</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="59"/>
        <source>Pan view with Space only</source>
        <translation>Панорамувати вигляд лише Пробілом</translation>
    </message>
</context>
<context>
    <name>ErdConnectionPanel</name>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="59"/>
        <source>Foreign key properties</source>
        <translation>Властивості зовнішнього ключа</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="83"/>
        <source>Composite relation (multiple columns)</source>
        <translation>Складений зв’язок (кілька стовпців)</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="137"/>
        <source>Referencing (child) table:</source>
        <translation>Таблиця, що посилається (дочірня):</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="156"/>
        <source>Referencing (child) column:</source>
        <translation>Стовпець, що посилається (дочірній):</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="51"/>
        <source>ERD side panel for relation between tables &quot;%1&quot; and &quot;%2&quot; has uncommitted modifications.</source>
        <translation>Бічна панель ERD для зв’язку між таблицями &quot;%1&quot; і &quot;%2&quot; має незафіксовані зміни.</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="57"/>
        <source>Apply changes to diagram</source>
        <comment>ERD editor</comment>
        <translation>Застосувати зміни до діаграми</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="58"/>
        <source>Abort changes</source>
        <comment>ERD editor</comment>
        <translation>Скасувати зміни</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="240"/>
        <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>Змінити зв’язок між &quot;%1&quot; і &quot;%2&quot;.</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="242"/>
        <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot; - change target to &quot;%3&quot;.</source>
        <translation>Змінити зв’язок між &quot;%1&quot; і &quot;%2&quot; — змінити ціль на &quot;%3&quot;.</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="252"/>
        <source>Failed to execute DDL required for relation modification. Details: %1</source>
        <translation>Не вдалося виконати DDL, необхідний для зміни зв’язку. Подробиці: %1</translation>
    </message>
</context>
<context>
    <name>ErdEditorPlugin</name>
    <message>
        <location filename="../erdeditorplugin.cpp" line="20"/>
        <source>Open ERD editor</source>
        <translation>Відкрити редактор ERD</translation>
    </message>
    <message>
        <location filename="../erdeditorplugin.cpp" line="74"/>
        <source>ERD editor cannot open because the database contains %1 tables, exceeding the configured limit of %2 tables. You can increase this limit in the settings, but higher values may slow down or freeze the application.</source>
        <translation>Редактор ERD не може відкритися, оскільки база даних містить %1 таблиць, що перевищує налаштоване обмеження у %2 таблиць. Ви можете збільшити це обмеження в налаштуваннях, але вищі значення можуть уповільнити або заморозити застосунок.</translation>
    </message>
</context>
<context>
    <name>ErdScene</name>
    <message>
        <location filename="../scene/erdscene.cpp" line="530"/>
        <source>Delete multiple diagram elements.</source>
        <comment>ERD editor</comment>
        <translation>Видалити кілька елементів діаграми.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="547"/>
        <source>Failed to execute the undo DDL. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>Не вдалося виконати DDL для скасування. Подробиці: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="569"/>
        <source>Failed to execute the redo DDL. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>Не вдалося виконати DDL для повторення. Подробиці: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="596"/>
        <source>Failed to execute DDL required for table deletion. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>Не вдалося виконати DDL, необхідний для видалення таблиці. Подробиці: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="607"/>
        <source>Delete foreign key between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>Видалити зовнішній ключ між &quot;%1&quot; і &quot;%2&quot;.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="616"/>
        <source>Failed to execute DDL required for foreign key deletion. Details: %1</source>
        <translation>Не вдалося виконати DDL, необхідний для видалення зовнішнього ключа. Подробиці: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="824"/>
        <source>Arrange entities</source>
        <translation>Упорядкувати сутності</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="825"/>
        <source>Are you sure you want to automatically arrange the entities on the diagram? This action will overwrite the current layout, and any manual adjustments will be lost.</source>
        <translation>Ви впевнені, що хочете автоматично впорядкувати сутності на діаграмі? Ця дія перезапише поточне компонування, і всі ручні коригування буде втрачено.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="845"/>
        <source>Change color of table &quot;%1&quot; to %2.</source>
        <translation>Змінити колір таблиці &quot;%1&quot; на %2.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="851"/>
        <source>Change color of multiple tables.</source>
        <translation>Змінити колір кількох таблиць.</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="696"/>
        <source>Apply diagram layout</source>
        <translation>Застосувати компонування діаграми</translation>
    </message>
</context>
<context>
    <name>ErdTableWindow</name>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="29"/>
        <source>Apply changes to diagram</source>
        <comment>ERD editor</comment>
        <translation>Застосувати зміни до діаграми</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="30"/>
        <source>Abort changes</source>
        <comment>ERD editor</comment>
        <translation>Скасувати зміни</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="49"/>
        <source>ERD side panel for table &quot;%1&quot; has uncommitted modifications.</source>
        <translation>Бічна панель ERD для таблиці &quot;%1&quot; має незафіксовані зміни.</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="106"/>
        <source>Invalid table changes</source>
        <comment>ERD editor</comment>
        <translation>Недійсні зміни таблиці</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="108"/>
        <source>&lt;b&gt;The table contains invalid changes&lt;/b&gt;</source>
        <comment>ERD editor</comment>
        <translation>&lt;b&gt;Таблиця містить недійсні зміни&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="109"/>
        <source>Some of the changes you made cannot be applied because they contain errors.&lt;br&gt;&lt;br&gt;&lt;b&gt;Errors:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;You can &lt;b&gt;return to editing&lt;/b&gt; and fix the problems, or &lt;b&gt;discard your changes&lt;/b&gt; and restore the previous state of the table.</source>
        <comment>ERD editor</comment>
        <translation>Деякі внесені вами зміни не можна застосувати, оскільки вони містять помилки.&lt;br&gt;&lt;br&gt;&lt;b&gt;Помилки:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;Ви можете &lt;b&gt;повернутися до редагування&lt;/b&gt; й виправити проблеми або &lt;b&gt;відкинути свої зміни&lt;/b&gt; та відновити попередній стан таблиці.</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="118"/>
        <source>Fix errors</source>
        <comment>ERD editor</comment>
        <translation>Виправити помилки</translation>
    </message>
</context>
<context>
    <name>ErdView</name>
    <message>
        <location filename="../scene/erdview.cpp" line="323"/>
        <source>Cannot edit compound foreign keys this way. Such connections have to be edited through the side panel.</source>
        <comment>ERD editor</comment>
        <translation>Неможливо редагувати складені зовнішні ключі таким способом. Такі з’єднання потрібно редагувати через бічну панель.</translation>
    </message>
    <message>
        <location filename="../scene/erdview.cpp" line="633"/>
        <source>Move table &quot;%1&quot;</source>
        <translation>Перемістити таблицю &quot;%1&quot;</translation>
    </message>
    <message>
        <location filename="../scene/erdview.cpp" line="639"/>
        <source>Move tables: %1</source>
        <translation>Перемістити таблиці: %1</translation>
    </message>
</context>
<context>
    <name>ErdWindow</name>
    <message>
        <location filename="../erdwindow.ui" line="86"/>
        <source>Select an item to edit its properties</source>
        <translation>Виберіть елемент, щоб редагувати його властивості</translation>
    </message>
    <message>
        <location filename="../erdwindow.ui" line="114"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Hold the Spacebar and drag with the mouse to pan the diagram freely without selecting any items.&lt;/p&gt;&lt;p&gt;- Use the mouse wheel to zoom in and out.&lt;/p&gt;&lt;p&gt;- Deselect the table (or click Commit in the side panel toolbar) to apply the side panel changes to the diagram.&lt;/p&gt;&lt;p&gt;- Press Esc (or click Rollback in the side panel toolbar) to discard the side panel changes.&lt;/p&gt;&lt;p&gt;- Double-Click on a table name or column to edit the name inline.&lt;/p&gt;&lt;p&gt;- Shift-Double-Click on a column to edit column details (datatype, constraints).&lt;/p&gt;&lt;p&gt;- To create a foreign key between table, click the middle mouse button on the table columns you want to connect.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;All diagram changes remain pending until you explicitly commit or roll them back&lt;/span&gt; using the toolbar buttons in the top-left corner of the diagram.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Learn more (click to open online help page)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Утримуйте Пробіл і перетягуйте мишею, щоб вільно панорамувати діаграму, не вибираючи жодних елементів.&lt;/p&gt;&lt;p&gt;- Використовуйте коліщатко миші, щоб збільшувати й зменшувати масштаб.&lt;/p&gt;&lt;p&gt;- Зніміть вибір із таблиці (або натисніть Зафіксувати на панелі інструментів бічної панелі), щоб застосувати зміни бічної панелі до діаграми.&lt;/p&gt;&lt;p&gt;- Натисніть Esc (або натисніть Відкотити на панелі інструментів бічної панелі), щоб відкинути зміни бічної панелі.&lt;/p&gt;&lt;p&gt;- Двічі клацніть назву таблиці або стовпець, щоб редагувати назву безпосередньо на місці.&lt;/p&gt;&lt;p&gt;- Клацніть стовпець двічі з Shift, щоб редагувати подробиці стовпця (тип даних, обмеження).&lt;/p&gt;&lt;p&gt;- Щоб створити зовнішній ключ між таблицями, клацніть середньою кнопкою миші стовпці таблиць, які потрібно з’єднати.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;Усі зміни діаграми залишаються в очікуванні, доки ви явно не зафіксуєте або не відкотите їх&lt;/span&gt; за допомогою кнопок панелі інструментів у верхньому лівому куті діаграми.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Дізнатися більше (натисніть, щоб відкрити сторінку онлайн-довідки)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="165"/>
        <source>Cancels ongoing action</source>
        <comment>ERD editor</comment>
        <translation>Скасовує поточну дію</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="166"/>
        <source>Create a table</source>
        <comment>ERD editor</comment>
        <translation>Створити таблицю</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="168"/>
        <location filename="../erdwindow.cpp" line="649"/>
        <source>Reload schema</source>
        <comment>ERD editor</comment>
        <translation>Перезавантажити схему</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="169"/>
        <source>Commit all pending changes</source>
        <comment>ERD editor</comment>
        <translation>Зафіксувати всі зміни, що очікують</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="170"/>
        <source>Revert diagram to initial state</source>
        <comment>ERD editor</comment>
        <translation>Повернути діаграму до початкового стану</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="172"/>
        <source>Undo</source>
        <comment>ERD editor</comment>
        <translation>Скасувати</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="173"/>
        <source>Redo</source>
        <comment>ERD editor</comment>
        <translation>Повторити</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="189"/>
        <source>Create a table</source>
        <translation>Створити таблицю</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="202"/>
        <source>Select all</source>
        <translation>Вибрати все</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="311"/>
        <source>Filter items</source>
        <comment>ERD editor</comment>
        <translation>Фільтрувати елементи</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="312"/>
        <source>Items that don’t match the filter will be dimmed.</source>
        <comment>ERD editor</comment>
        <translation>Елементи, які не відповідають фільтру, буде затемнено.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="448"/>
        <source>table name</source>
        <comment>ERD editor</comment>
        <translation>назва таблиці</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="450"/>
        <source>column name</source>
        <comment>ERD editor</comment>
        <translation>назва стовпця</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="570"/>
        <source>All changes have been successfully applied to the database.</source>
        <comment>ERD editor</comment>
        <translation>Усі зміни успішно застосовано до бази даних.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="578"/>
        <source>The changes were successfully committed. No modifications to the database schema were required.</source>
        <comment>ERD editor</comment>
        <translation>Зміни успішно зафіксовано. Зміни схеми бази даних не були потрібні.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="586"/>
        <source>Failed to apply changes to the database. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>Не вдалося застосувати зміни до бази даних. Подробиці: %1</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="650"/>
        <source>This action will discard all your pending changes and reload the diagram from the current database schema. The undo/redo history will be cleared. Do you want to proceed?</source>
        <translation>Ця дія відкине всі ваші зміни, що очікують, і перезавантажить діаграму з поточної схеми бази даних. Історію скасування/повторення буде очищено. Бажаєте продовжити?</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="833"/>
        <source>ERD window &quot;%1&quot; has uncommitted changes.</source>
        <translation>Вікно ERD &quot;%1&quot; має незафіксовані зміни.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="1145"/>
        <source>ERD editor (%1)</source>
        <translation>Редактор ERD (%1)</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="1147"/>
        <source>ERD editor</source>
        <translation>Редактор ERD</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="181"/>
        <source>The number of changes pending for commit. Click to see details.</source>
        <comment>ERD editor</comment>
        <translation>Кількість змін, що очікують фіксації. Клацніть, щоб переглянути подробиці.</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="190"/>
        <source>Add a foreign key</source>
        <comment>ERD editor</comment>
        <translation>Додати зовнішній ключ</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="192"/>
        <source>Delete selected items</source>
        <comment>ERD editor</comment>
        <translation>Видалити вибрані елементи</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="198"/>
        <source>Auto-arrange (local forces)</source>
        <comment>ERD editor</comment>
        <translation>Автоматичне впорядкування (локальні сили)</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="199"/>
        <source>Auto-arrange (global balance)</source>
        <comment>ERD editor</comment>
        <translation>Автоматичне впорядкування (глобальний баланс)</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="213"/>
        <source>Set table color</source>
        <comment>ERD editor</comment>
        <translation>Установити колір таблиці</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="241"/>
        <source>Use straight line</source>
        <comment>ERD editor</comment>
        <translation>Використовувати пряму лінію</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="242"/>
        <source>Use curvy line</source>
        <comment>ERD editor</comment>
        <translation>Використовувати криву лінію</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="243"/>
        <source>Use square line</source>
        <comment>ERD editor</comment>
        <translation>Використовувати ламану лінію</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="254"/>
        <source>Choose line type</source>
        <comment>ERD editor</comment>
        <translation>Вибрати тип лінії</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../changes/erdchangedeleteentity.cpp" line="48"/>
        <source>Drop table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>Видалити таблицю &quot;%1&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdchangemodifyentity.cpp" line="61"/>
        <source>Modify table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>Змінити таблицю &quot;%1&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdchangenewentity.cpp" line="54"/>
        <source>Create table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>Створити таблицю &quot;%1&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdeffectivechangemerger.cpp" line="31"/>
        <source>Failed to create in-memory databases required for change compacting.</source>
        <translation>Не вдалося створити бази даних у пам’яті, необхідні для ущільнення змін.</translation>
    </message>
    <message>
        <location filename="../changes/erdeffectivechangemerger.cpp" line="399"/>
        <source>Drop tables: %1</source>
        <comment>ERD editor</comment>
        <translation>Видалити таблиці: %1</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="149"/>
        <source>Could not commit changes for finalized ERD connection.</source>
        <translation>Не вдалося зафіксувати зміни для завершеного з’єднання ERD.</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="155"/>
        <source>Update relationship from &quot;%1&quot;-&quot;%2&quot; to &quot;%1&quot;-&quot;%3&quot;.</source>
        <translation>Оновити зв’язок із &quot;%1&quot;-&quot;%2&quot; на &quot;%1&quot;-&quot;%3&quot;.</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="157"/>
        <source>Create relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>Створити зв’язок між &quot;%1&quot; і &quot;%2&quot;.</translation>
    </message>
    <message>
        <location filename="../changes/erdchangemoveentity.cpp" line="28"/>
        <source>Move table &quot;%1&quot;</source>
        <translation>Перемістити таблицю &quot;%1&quot;</translation>
    </message>
</context>
</TS>

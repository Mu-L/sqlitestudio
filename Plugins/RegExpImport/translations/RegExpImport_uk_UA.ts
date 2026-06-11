<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="uk" sourcelanguage="en">
<context>
    <name>RegExpImport</name>
    <message>
        <location filename="../regexpimport.cpp" line="37"/>
        <source>Text files (*.txt);;All files (*)</source>
        <translation>Текстові файли (*.txt);;Усі файли (*)</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="53"/>
        <source>Cannot read file %1</source>
        <translation>Не вдалося прочитати файл %1</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="161"/>
        <source>Enter the regular expression pattern.</source>
        <translation>Введіть шаблон регулярного виразу.</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="169"/>
        <source>Invalid pattern: %1</source>
        <translation>Неприпустимий шаблон: %1</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="189"/>
        <source>Requested capture index %1 is out of range.</source>
        <translation>Запитаний індекс захоплення %1 перебуває поза діапазоном.</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="196"/>
        <source>&lt;p&gt;Requested capture group name &apos;%1&apos;, but it&apos;s not defined in the pattern: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</source>
        <translation>&lt;p&gt;Запитано назву групи захоплення &apos;%1&apos;, але її не визначено в шаблоні: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>RegExpImportConfig</name>
    <message>
        <location filename="../regexpimport.ui" line="20"/>
        <source>Capture groups</source>
        <translation>Групи захоплення</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="26"/>
        <source>Treat all RegExp capture groups as columns</source>
        <translation>Розглядати всі групи захоплення регулярного виразу як стовпці</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="39"/>
        <source>Import only following groups:</source>
        <translation>Імпортувати лише такі групи:</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="52"/>
        <source>&lt;p&gt;Enter comma separated list of capture group indexes. The 0 index refers to the entire matched string.&lt;/p&gt;
&lt;p&gt;If you used named groups in the pattern, you can use names instead of indexes. You can mix indexes and names in this list.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Введіть список індексів груп захоплення, розділених комами. Індекс 0 відповідає всьому рядку, що збігся.&lt;/p&gt;
&lt;p&gt;Якщо в шаблоні використано іменовані групи, замість індексів можна використовувати назви. У цьому списку можна поєднувати індекси та назви.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="56"/>
        <source>Example: 1, 3, 4</source>
        <translation>Приклад: 1, 3, 4</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="69"/>
        <source>Pattern:</source>
        <translation>Шаблон:</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="76"/>
        <source>&lt;p&gt;Use Regular Expression groups to enclose parts of the expression that you want to import. If you want to use a group, that you don&apos;t want to import, then use &quot;import only following groups&quot; option below.

You can use named groups and refer to them in group list below. To name a group use: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</source>
        <translation>&lt;p&gt;Використовуйте групи регулярного виразу, щоб узяти в них частини виразу, які потрібно імпортувати. Якщо потрібно використати групу, яку ви не хочете імпортувати, скористайтеся наведеним нижче параметром &quot;імпортувати лише такі групи&quot;.

Можна використовувати іменовані групи та посилатися на них у списку груп нижче. Щоб назвати групу, використайте: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="81"/>
        <source>Example: (\d+)\s+((\d+)\w+)\s+(\w+)</source>
        <translation>Приклад: (\d+)\s+((\d+)\w+)\s+(\w+)</translation>
    </message>
</context>
</TS>

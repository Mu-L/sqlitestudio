<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="sk" sourcelanguage="en">
  <context>
    <name>RegExpImport</name>
    <message>
      <location filename="../regexpimport.cpp" line="37"/>
      <source>Text files (*.txt);;All files (*)</source>
      <translation>Textové súbory (*.txt);;Všetky súbory (*)</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="53"/>
      <source>Cannot read file %1</source>
      <translation>Nie je možné prečítať súbor %1</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="161"/>
      <source>Enter the regular expression pattern.</source>
      <translation>Zadajte vzor regulárneho výrazu.</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="169"/>
      <source>Invalid pattern: %1</source>
      <translation>Neplatný vzor: %1</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="189"/>
      <source>Requested capture index %1 is out of range.</source>
      <translation>Požadovaný index zachytávania %1 je mimo rozsahu.</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="196"/>
      <source>&lt;p&gt;Requested capture group name &apos;%1&apos;, but it&apos;s not defined in the pattern: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Bol požadovaný názov zachytávacej skupiny &apos;%1&apos;, ale nie je definovaný vo vzore: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>RegExpImportConfig</name>
    <message>
      <location filename="../regexpimport.ui" line="20"/>
      <source>Capture groups</source>
      <translation>Zachytávacie skupiny</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="26"/>
      <source>Treat all RegExp capture groups as columns</source>
      <translation>Považovať všetky zachytávacie skupiny RegExp za stĺpce</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="39"/>
      <source>Import only following groups:</source>
      <translation>Importovať iba nasledujúce skupiny:</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="52"/>
      <source>&lt;p&gt;Enter comma separated list of capture group indexes. The 0 index refers to the entire matched string.&lt;/p&gt;
&lt;p&gt;If you used named groups in the pattern, you can use names instead of indexes. You can mix indexes and names in this list.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Zadajte zoznam indexov zachytávacích skupín oddelených čiarkami. Index 0 odkazuje na celý zhodný reťazec.&lt;/p&gt;
&lt;p&gt;Ak ste vo vzore použili pomenované skupiny, môžete namiesto indexov použiť názvy. V tomto zozname môžete kombinovať indexy aj názvy.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="56"/>
      <source>Example: 1, 3, 4</source>
      <translation>Príklad: 1, 3, 4</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="69"/>
      <source>Pattern:</source>
      <translation>Vzor:</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="76"/>
      <source>&lt;p&gt;Use Regular Expression groups to enclose parts of the expression that you want to import. If you want to use a group, that you don&apos;t want to import, then use &quot;import only following groups&quot; option below.

You can use named groups and refer to them in group list below. To name a group use: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Použite skupiny regulárneho výrazu na uzavretie častí výrazu, ktoré chcete importovať. Ak chcete použiť skupinu, ktorú nechcete importovať, použite nižšie uvedenú možnosť &quot;importovať iba nasledujúce skupiny&quot;.

Môžete použiť pomenované skupiny a odkazovať na ne v zozname skupín nižšie. Na pomenovanie skupiny použite: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="81"/>
      <source>Example: (\d+)\s+((\d+)\w+)\s+(\w+)</source>
      <translation>Príklad: (\d+)\s+((\d+)\w+)\s+(\w+)</translation>
    </message>
  </context>
</TS>

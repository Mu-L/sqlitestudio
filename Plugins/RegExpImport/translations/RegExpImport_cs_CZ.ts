<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="cs" sourcelanguage="en">
  <context>
    <name>RegExpImport</name>
    <message>
      <location filename="../regexpimport.cpp" line="37"/>
      <source>Text files (*.txt);;All files (*)</source>
      <translation>Textové soubory (*.txt);;Všechny soubory (*)</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="53"/>
      <source>Cannot read file %1</source>
      <translation>Nelze přečíst soubor %1</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="161"/>
      <source>Enter the regular expression pattern.</source>
      <translation>Zadejte vzor regulárního výrazu.</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="169"/>
      <source>Invalid pattern: %1</source>
      <translation>Neplatný vzor: %1</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="189"/>
      <source>Requested capture index %1 is out of range.</source>
      <translation>Požadovaný index zachytávací skupiny %1 je mimo rozsah.</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="196"/>
      <source>&lt;p&gt;Requested capture group name &apos;%1&apos;, but it&apos;s not defined in the pattern: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Byl požadován název zachytávací skupiny &apos;%1&apos;, ale není definován ve vzoru: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>RegExpImportConfig</name>
    <message>
      <location filename="../regexpimport.ui" line="20"/>
      <source>Capture groups</source>
      <translation>Zachytávací skupiny</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="26"/>
      <source>Treat all RegExp capture groups as columns</source>
      <translation>Považovat všechny zachytávací skupiny regulárního výrazu za sloupce</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="39"/>
      <source>Import only following groups:</source>
      <translation>Importovat pouze následující skupiny:</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="52"/>
      <source>&lt;p&gt;Enter comma separated list of capture group indexes. The 0 index refers to the entire matched string.&lt;/p&gt;
&lt;p&gt;If you used named groups in the pattern, you can use names instead of indexes. You can mix indexes and names in this list.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Zadejte seznam indexů zachytávacích skupin oddělený čárkami. Index 0 odkazuje na celý nalezený řetězec.&lt;/p&gt;
&lt;p&gt;Pokud jste ve vzoru použili pojmenované skupiny, můžete místo indexů použít názvy. V tomto seznamu můžete kombinovat indexy a názvy.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="56"/>
      <source>Example: 1, 3, 4</source>
      <translation>Příklad: 1, 3, 4</translation>
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
      <translation>&lt;p&gt;Použijte skupiny regulárního výrazu k uzavření částí výrazu, které chcete importovat. Pokud chcete použít skupinu, kterou nechcete importovat, použijte níže uvedenou volbu &quot;importovat pouze následující skupiny&quot;.

Můžete použít pojmenované skupiny a odkazovat na ně v níže uvedeném seznamu skupin. Chcete-li skupinu pojmenovat, použijte: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="81"/>
      <source>Example: (\d+)\s+((\d+)\w+)\s+(\w+)</source>
      <translation>Příklad: (\d+)\s+((\d+)\w+)\s+(\w+)</translation>
    </message>
  </context>
</TS>

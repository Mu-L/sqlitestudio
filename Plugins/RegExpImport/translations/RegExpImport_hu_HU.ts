<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="hu" sourcelanguage="en">
<context>
    <name>RegExpImport</name>
    <message>
        <location filename="../regexpimport.cpp" line="37"/>
        <source>Text files (*.txt);;All files (*)</source>
        <translation>Szövegfájlok (*.txt);;Minden fájl (*)</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="53"/>
        <source>Cannot read file %1</source>
        <translation>Nem olvasható a fájl: %1</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="161"/>
        <source>Enter the regular expression pattern.</source>
        <translation>Adja meg a reguláris kifejezés mintáját.</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="169"/>
        <source>Invalid pattern: %1</source>
        <translation>Érvénytelen minta: %1</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="189"/>
        <source>Requested capture index %1 is out of range.</source>
        <translation>A kért rögzítési index %1 tartományon kívül esik.</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="196"/>
        <source>&lt;p&gt;Requested capture group name &apos;%1&apos;, but it&apos;s not defined in the pattern: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</source>
        <translation>&lt;p&gt;A kért rögzítési csoport neve &apos;%1&apos;, de nincs definiálva a mintában: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>RegExpImportConfig</name>
    <message>
        <location filename="../regexpimport.ui" line="20"/>
        <source>Capture groups</source>
        <translation>Rögzítő csoportok</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="26"/>
        <source>Treat all RegExp capture groups as columns</source>
        <translation>Az összes RegExp rögzítő csoport kezelése oszlopként</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="39"/>
        <source>Import only following groups:</source>
        <translation>Csak a következő csoportok importálása:</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="52"/>
        <source>&lt;p&gt;Enter comma separated list of capture group indexes. The 0 index refers to the entire matched string.&lt;/p&gt;
&lt;p&gt;If you used named groups in the pattern, you can use names instead of indexes. You can mix indexes and names in this list.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Adja meg a rögzítőcsoport-indexek vesszővel elválasztott listáját. A 0 index a teljes illeszkedő karakterláncra hivatkozik.&lt;/p&gt;
&lt;p&gt;Ha névvel ellátott csoportokat használt a mintában, indexek helyett neveket is használhat. Ebben a listában az indexek és a nevek vegyesen is szerepelhetnek.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="56"/>
        <source>Example: 1, 3, 4</source>
        <translation>Példa: 1, 3, 4</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="69"/>
        <source>Pattern:</source>
        <translation>Minta:</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="76"/>
        <source>&lt;p&gt;Use Regular Expression groups to enclose parts of the expression that you want to import. If you want to use a group, that you don&apos;t want to import, then use &quot;import only following groups&quot; option below.

You can use named groups and refer to them in group list below. To name a group use: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</source>
        <translation>&lt;p&gt;Használjon reguláriskifejezés-csoportokat az importálni kívánt kifejezésrészek körülhatárolásához. Ha olyan csoportot szeretne használni, amelyet nem szeretne importálni, akkor használja az alábbi &quot;csak a következő csoportok importálása&quot; beállítást.

Használhat névvel ellátott csoportokat, és hivatkozhat rájuk az alábbi csoportlistában. Csoport elnevezéséhez használja ezt: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="81"/>
        <source>Example: (\d+)\s+((\d+)\w+)\s+(\w+)</source>
        <translation>Példa: (\d+)\s+((\d+)\w+)\s+(\w+)</translation>
    </message>
</context>
</TS>

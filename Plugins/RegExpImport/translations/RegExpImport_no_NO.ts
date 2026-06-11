<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="no" sourcelanguage="en">
<context>
    <name>RegExpImport</name>
    <message>
        <location filename="../regexpimport.cpp" line="37"/>
        <source>Text files (*.txt);;All files (*)</source>
        <translation>Tekstfiler (*.txt);;Alle filer (*)</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="53"/>
        <source>Cannot read file %1</source>
        <translation>Kan ikke lese filen %1</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="161"/>
        <source>Enter the regular expression pattern.</source>
        <translation>Angi mønsteret for regulært uttrykk.</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="169"/>
        <source>Invalid pattern: %1</source>
        <translation>Ugyldig mønster: %1</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="189"/>
        <source>Requested capture index %1 is out of range.</source>
        <translation>Den forespurte fangstindeksen %1 er utenfor gyldig område.</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="196"/>
        <source>&lt;p&gt;Requested capture group name &apos;%1&apos;, but it&apos;s not defined in the pattern: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</source>
        <translation>&lt;p&gt;Forespurt navn på fangstgruppe &apos;%1&apos;, men det er ikke definert i mønsteret: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>RegExpImportConfig</name>
    <message>
        <location filename="../regexpimport.ui" line="20"/>
        <source>Capture groups</source>
        <translation>Fangstgrupper</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="26"/>
        <source>Treat all RegExp capture groups as columns</source>
        <translation>Behandle alle RegExp-fangstgrupper som kolonner</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="39"/>
        <source>Import only following groups:</source>
        <translation>Importer bare følgende grupper:</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="52"/>
        <source>&lt;p&gt;Enter comma separated list of capture group indexes. The 0 index refers to the entire matched string.&lt;/p&gt;
&lt;p&gt;If you used named groups in the pattern, you can use names instead of indexes. You can mix indexes and names in this list.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Angi en kommaseparert liste over fangstgruppeindekser. Indeks 0 viser til hele den samsvarende strengen.&lt;/p&gt;
&lt;p&gt;Hvis du brukte navngitte grupper i mønsteret, kan du bruke navn i stedet for indekser. Du kan blande indekser og navn i denne listen.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="56"/>
        <source>Example: 1, 3, 4</source>
        <translation>Eksempel: 1, 3, 4</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="69"/>
        <source>Pattern:</source>
        <translation>Mønster:</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="76"/>
        <source>&lt;p&gt;Use Regular Expression groups to enclose parts of the expression that you want to import. If you want to use a group, that you don&apos;t want to import, then use &quot;import only following groups&quot; option below.

You can use named groups and refer to them in group list below. To name a group use: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</source>
        <translation>&lt;p&gt;Bruk grupper i regulære uttrykk til å omslutte deler av uttrykket du vil importere. Hvis du vil bruke en gruppe som du ikke vil importere, bruker du alternativet &quot;importer bare følgende grupper&quot; nedenfor.

Du kan bruke navngitte grupper og referere til dem i gruppelisten nedenfor. For å gi en gruppe navn, bruk: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="81"/>
        <source>Example: (\d+)\s+((\d+)\w+)\s+(\w+)</source>
        <translation>Eksempel: (\d+)\s+((\d+)\w+)\s+(\w+)</translation>
    </message>
</context>
</TS>

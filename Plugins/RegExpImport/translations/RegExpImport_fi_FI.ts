<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fi" sourcelanguage="en">
  <context>
    <name>RegExpImport</name>
    <message>
      <location filename="../regexpimport.cpp" line="37"/>
      <source>Text files (*.txt);;All files (*)</source>
      <translation>Tekstitiedostot (*.txt);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="53"/>
      <source>Cannot read file %1</source>
      <translation>Tiedostoa %1 ei voi lukea</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="161"/>
      <source>Enter the regular expression pattern.</source>
      <translation>Syötä säännöllisen lausekkeen malli.</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="169"/>
      <source>Invalid pattern: %1</source>
      <translation>Virheellinen malli: %1</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="189"/>
      <source>Requested capture index %1 is out of range.</source>
      <translation>Pyydetty sieppausindeksi %1 on alueen ulkopuolella.</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="196"/>
      <source>&lt;p&gt;Requested capture group name &apos;%1&apos;, but it&apos;s not defined in the pattern: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Pyydettiin sieppausryhmän nimeä &apos;%1&apos;, mutta sitä ei ole määritetty mallissa: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>RegExpImportConfig</name>
    <message>
      <location filename="../regexpimport.ui" line="20"/>
      <source>Capture groups</source>
      <translation>Sieppausryhmät</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="26"/>
      <source>Treat all RegExp capture groups as columns</source>
      <translation>Käsittele kaikki RegExp-sieppausryhmät sarakkeina</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="39"/>
      <source>Import only following groups:</source>
      <translation>Tuo vain seuraavat ryhmät:</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="52"/>
      <source>&lt;p&gt;Enter comma separated list of capture group indexes. The 0 index refers to the entire matched string.&lt;/p&gt;
&lt;p&gt;If you used named groups in the pattern, you can use names instead of indexes. You can mix indexes and names in this list.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Syötä pilkuilla erotettu luettelo sieppausryhmien indekseistä. Indeksi 0 viittaa koko täsmänneeseen merkkijonoon.&lt;/p&gt;
&lt;p&gt;Jos käytit mallissa nimettyjä ryhmiä, voit käyttää nimiä indeksien sijasta. Voit sekoittaa indeksejä ja nimiä tässä luettelossa.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="56"/>
      <source>Example: 1, 3, 4</source>
      <translation>Esimerkki: 1, 3, 4</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="69"/>
      <source>Pattern:</source>
      <translation>Malli:</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="76"/>
      <source>&lt;p&gt;Use Regular Expression groups to enclose parts of the expression that you want to import. If you want to use a group, that you don&apos;t want to import, then use &quot;import only following groups&quot; option below.

You can use named groups and refer to them in group list below. To name a group use: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Käytä säännöllisen lausekkeen ryhmiä ympäröimään lausekkeen osat, jotka haluat tuoda. Jos haluat käyttää ryhmää, jota et halua tuoda, käytä alla olevaa &quot;tuo vain seuraavat ryhmät&quot; -vaihtoehtoa.

Voit käyttää nimettyjä ryhmiä ja viitata niihin alla olevassa ryhmäluettelossa. Nimeä ryhmä käyttämällä: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="81"/>
      <source>Example: (\d+)\s+((\d+)\w+)\s+(\w+)</source>
      <translation>Esimerkki: (\d+)\s+((\d+)\w+)\s+(\w+)</translation>
    </message>
  </context>
</TS>

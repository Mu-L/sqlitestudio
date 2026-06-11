<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="el" sourcelanguage="en">
<context>
    <name>RegExpImport</name>
    <message>
        <location filename="../regexpimport.cpp" line="37"/>
        <source>Text files (*.txt);;All files (*)</source>
        <translation>Αρχεία κειμένου (*.txt);;Όλα τα αρχεία (*)</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="53"/>
        <source>Cannot read file %1</source>
        <translation>Δεν είναι δυνατή η ανάγνωση του αρχείου %1</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="161"/>
        <source>Enter the regular expression pattern.</source>
        <translation>Εισαγάγετε το μοτίβο κανονικής έκφρασης.</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="169"/>
        <source>Invalid pattern: %1</source>
        <translation>Μη έγκυρο μοτίβο: %1</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="189"/>
        <source>Requested capture index %1 is out of range.</source>
        <translation>Ο ζητούμενος δείκτης σύλληψης %1 είναι εκτός εύρους.</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="196"/>
        <source>&lt;p&gt;Requested capture group name &apos;%1&apos;, but it&apos;s not defined in the pattern: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</source>
        <translation>&lt;p&gt;Ζητήθηκε το όνομα ομάδας σύλληψης &apos;%1&apos;, αλλά δεν έχει οριστεί στο μοτίβο: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>RegExpImportConfig</name>
    <message>
        <location filename="../regexpimport.ui" line="20"/>
        <source>Capture groups</source>
        <translation>Ομάδες σύλληψης</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="26"/>
        <source>Treat all RegExp capture groups as columns</source>
        <translation>Αντιμετώπιση όλων των ομάδων σύλληψης RegExp ως στηλών</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="39"/>
        <source>Import only following groups:</source>
        <translation>Εισαγωγή μόνο των ακόλουθων ομάδων:</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="52"/>
        <source>&lt;p&gt;Enter comma separated list of capture group indexes. The 0 index refers to the entire matched string.&lt;/p&gt;
&lt;p&gt;If you used named groups in the pattern, you can use names instead of indexes. You can mix indexes and names in this list.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Εισαγάγετε λίστα δεικτών ομάδων σύλληψης διαχωρισμένων με κόμματα. Ο δείκτης 0 αναφέρεται σε ολόκληρη την αντιστοιχισμένη συμβολοσειρά.&lt;/p&gt;
&lt;p&gt;Αν χρησιμοποιήσατε ονομασμένες ομάδες στο μοτίβο, μπορείτε να χρησιμοποιήσετε ονόματα αντί για δείκτες. Μπορείτε να συνδυάσετε δείκτες και ονόματα σε αυτήν τη λίστα.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="56"/>
        <source>Example: 1, 3, 4</source>
        <translation>Παράδειγμα: 1, 3, 4</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="69"/>
        <source>Pattern:</source>
        <translation>Μοτίβο:</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="76"/>
        <source>&lt;p&gt;Use Regular Expression groups to enclose parts of the expression that you want to import. If you want to use a group, that you don&apos;t want to import, then use &quot;import only following groups&quot; option below.

You can use named groups and refer to them in group list below. To name a group use: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</source>
        <translation>&lt;p&gt;Χρησιμοποιήστε ομάδες κανονικής έκφρασης για να περικλείσετε τα τμήματα της έκφρασης που θέλετε να εισαγάγετε. Αν θέλετε να χρησιμοποιήσετε μια ομάδα την οποία δεν θέλετε να εισαγάγετε, τότε χρησιμοποιήστε την επιλογή &quot;εισαγωγή μόνο των ακόλουθων ομάδων&quot; παρακάτω.

Μπορείτε να χρησιμοποιήσετε ονομασμένες ομάδες και να αναφέρεστε σε αυτές στη λίστα ομάδων παρακάτω. Για να ονομάσετε μια ομάδα, χρησιμοποιήστε: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="81"/>
        <source>Example: (\d+)\s+((\d+)\w+)\s+(\w+)</source>
        <translation>Παράδειγμα: (\d+)\s+((\d+)\w+)\s+(\w+)</translation>
    </message>
</context>
</TS>

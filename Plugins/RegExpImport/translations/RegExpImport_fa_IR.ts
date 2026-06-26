<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fa" sourcelanguage="en">
  <context>
    <name>RegExpImport</name>
    <message>
      <location filename="../regexpimport.cpp" line="37"/>
      <source>Text files (*.txt);;All files (*)</source>
      <translation>فایل‌های متنی (*.txt);;همهٔ فایل‌ها (*)</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="53"/>
      <source>Cannot read file %1</source>
      <translation>نمی‌توان فایل %1 را خواند</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="161"/>
      <source>Enter the regular expression pattern.</source>
      <translation>الگوی عبارت منظم را وارد کنید.</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="169"/>
      <source>Invalid pattern: %1</source>
      <translation>الگوی نامعتبر: %1</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="189"/>
      <source>Requested capture index %1 is out of range.</source>
      <translation>نمایهٔ گروه ضبط درخواستی %1 خارج از محدوده است.</translation>
    </message>
    <message>
      <location filename="../regexpimport.cpp" line="196"/>
      <source>&lt;p&gt;Requested capture group name &apos;%1&apos;, but it&apos;s not defined in the pattern: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;نام گروه ضبط درخواستی &apos;%1&apos; است، اما در الگو تعریف نشده است: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>RegExpImportConfig</name>
    <message>
      <location filename="../regexpimport.ui" line="20"/>
      <source>Capture groups</source>
      <translation>گروه‌های ضبط</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="26"/>
      <source>Treat all RegExp capture groups as columns</source>
      <translation>همهٔ گروه‌های ضبط RegExp را به‌عنوان ستون در نظر بگیر</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="39"/>
      <source>Import only following groups:</source>
      <translation>فقط گروه‌های زیر را وارد کن:</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="52"/>
      <source>&lt;p&gt;Enter comma separated list of capture group indexes. The 0 index refers to the entire matched string.&lt;/p&gt;
&lt;p&gt;If you used named groups in the pattern, you can use names instead of indexes. You can mix indexes and names in this list.&lt;/p&gt;</source>
      <translation>&lt;p&gt;فهرست نمایه‌های گروه ضبط را که با ویرگول جدا شده‌اند وارد کنید. نمایهٔ 0 به کل رشتهٔ تطبیق‌یافته اشاره دارد.&lt;/p&gt;
&lt;p&gt;اگر در الگو از گروه‌های نام‌دار استفاده کرده‌اید، می‌توانید به‌جای نمایه‌ها از نام‌ها استفاده کنید. می‌توانید نمایه‌ها و نام‌ها را در این فهرست با هم ترکیب کنید.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="56"/>
      <source>Example: 1, 3, 4</source>
      <translation>مثال: 1, 3, 4</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="69"/>
      <source>Pattern:</source>
      <translation>الگو:</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="76"/>
      <source>&lt;p&gt;Use Regular Expression groups to enclose parts of the expression that you want to import. If you want to use a group, that you don&apos;t want to import, then use &quot;import only following groups&quot; option below.

You can use named groups and refer to them in group list below. To name a group use: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;از گروه‌های عبارت منظم برای محصور کردن بخش‌هایی از عبارت که می‌خواهید وارد کنید استفاده کنید. اگر می‌خواهید از گروهی استفاده کنید که نمی‌خواهید وارد شود، از گزینهٔ &quot;فقط گروه‌های زیر را وارد کن&quot; در پایین استفاده کنید.

می‌توانید از گروه‌های نام‌دار استفاده کنید و در فهرست گروه زیر به آن‌ها ارجاع دهید. برای نام‌گذاری یک گروه از این استفاده کنید: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../regexpimport.ui" line="81"/>
      <source>Example: (\d+)\s+((\d+)\w+)\s+(\w+)</source>
      <translation>مثال: (\d+)\s+((\d+)\w+)\s+(\w+)</translation>
    </message>
  </context>
</TS>

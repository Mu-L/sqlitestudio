<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="vi" sourcelanguage="en">
<context>
    <name>RegExpImport</name>
    <message>
        <location filename="../regexpimport.cpp" line="37"/>
        <source>Text files (*.txt);;All files (*)</source>
        <translation>Tệp văn bản (*.txt);;Tất cả tệp (*)</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="53"/>
        <source>Cannot read file %1</source>
        <translation>Không thể đọc tệp %1</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="161"/>
        <source>Enter the regular expression pattern.</source>
        <translation>Nhập mẫu biểu thức chính quy.</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="169"/>
        <source>Invalid pattern: %1</source>
        <translation>Mẫu không hợp lệ: %1</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="189"/>
        <source>Requested capture index %1 is out of range.</source>
        <translation>Chỉ mục nhóm bắt được yêu cầu %1 nằm ngoài phạm vi.</translation>
    </message>
    <message>
        <location filename="../regexpimport.cpp" line="196"/>
        <source>&lt;p&gt;Requested capture group name &apos;%1&apos;, but it&apos;s not defined in the pattern: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</source>
        <translation>&lt;p&gt;Đã yêu cầu tên nhóm bắt &apos;%1&apos;, nhưng tên này không được định nghĩa trong mẫu: &lt;pre&gt;%2&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>RegExpImportConfig</name>
    <message>
        <location filename="../regexpimport.ui" line="20"/>
        <source>Capture groups</source>
        <translation>Nhóm bắt</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="26"/>
        <source>Treat all RegExp capture groups as columns</source>
        <translation>Xử lý tất cả các nhóm bắt RegExp như các cột</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="39"/>
        <source>Import only following groups:</source>
        <translation>Chỉ nhập các nhóm sau:</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="52"/>
        <source>&lt;p&gt;Enter comma separated list of capture group indexes. The 0 index refers to the entire matched string.&lt;/p&gt;
&lt;p&gt;If you used named groups in the pattern, you can use names instead of indexes. You can mix indexes and names in this list.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Nhập danh sách các chỉ mục nhóm bắt, phân tách bằng dấu phẩy. Chỉ mục 0 tham chiếu đến toàn bộ chuỗi khớp.&lt;/p&gt;
&lt;p&gt;Nếu bạn đã dùng các nhóm được đặt tên trong mẫu, bạn có thể dùng tên thay cho chỉ mục. Bạn có thể trộn lẫn chỉ mục và tên trong danh sách này.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="56"/>
        <source>Example: 1, 3, 4</source>
        <translation>Ví dụ: 1, 3, 4</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="69"/>
        <source>Pattern:</source>
        <translation>Mẫu:</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="76"/>
        <source>&lt;p&gt;Use Regular Expression groups to enclose parts of the expression that you want to import. If you want to use a group, that you don&apos;t want to import, then use &quot;import only following groups&quot; option below.

You can use named groups and refer to them in group list below. To name a group use: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</source>
        <translation>&lt;p&gt;Sử dụng các nhóm Biểu thức chính quy để bao quanh các phần của biểu thức mà bạn muốn nhập. Nếu bạn muốn sử dụng một nhóm mà bạn không muốn nhập, thì hãy sử dụng tùy chọn &quot;chỉ nhập các nhóm sau&quot; bên dưới.

Bạn có thể sử dụng các nhóm được đặt tên và tham chiếu đến chúng trong danh sách nhóm bên dưới. Để đặt tên cho một nhóm, hãy sử dụng: &lt;pre&gt;(?&amp;lt;myGroupName&amp;gt;\s+\d+\s+)&lt;/pre&gt;&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../regexpimport.ui" line="81"/>
        <source>Example: (\d+)\s+((\d+)\w+)\s+(\w+)</source>
        <translation>Ví dụ: (\d+)\s+((\d+)\w+)\s+(\w+)</translation>
    </message>
</context>
</TS>

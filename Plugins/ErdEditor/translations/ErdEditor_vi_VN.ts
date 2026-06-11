<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="vi" sourcelanguage="en">
  <context>
    <name>ErdChangeRegistryDialog</name>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="14"/>
      <source>Pending changes registry</source>
      <translation>Sổ đăng ký thay đổi đang chờ</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="65"/>
      <source>Pending changes</source>
      <translation>Thay đổi đang chờ</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="105"/>
      <source>DDL preview</source>
      <translation>Xem trước DDL</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="143"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Shows the changes as they will be committed. Redundant or mutually cancelling steps are merged or removed from the list.&lt;br/&gt;When disabled, all individual undo and redo steps are shown.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Hiển thị các thay đổi như khi chúng sẽ được xác nhận. Các bước dư thừa hoặc triệt tiêu lẫn nhau sẽ được hợp nhất hoặc xóa khỏi danh sách.&lt;br/&gt;Khi bị tắt, tất cả các bước hoàn tác và làm lại riêng lẻ sẽ được hiển thị.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="146"/>
      <source>Show effective changes only</source>
      <translation>Chỉ hiển thị thay đổi có hiệu lực</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="153"/>
      <source>&lt;html&gt;&lt;body&gt;Shows changes that do not modify the database schema, but only affect the diagram (for example, table position changes). &lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;body&gt;Hiển thị các thay đổi không sửa đổi lược đồ cơ sở dữ liệu mà chỉ ảnh hưởng đến sơ đồ (ví dụ: thay đổi vị trí bảng). &lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="156"/>
      <source>Show non-schema changes</source>
      <translation>Hiển thị thay đổi không thuộc lược đồ</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.cpp" line="58"/>
      <source>-- This is a change applied only to the diagram. It has no database schema efects.</source>
      <comment>ERD editor</comment>
      <translation>-- Đây là thay đổi chỉ được áp dụng cho sơ đồ. Nó không có tác động đến lược đồ cơ sở dữ liệu.</translation>
    </message>
  </context>
  <context>
    <name>ErdConfig</name>
    <message>
      <location filename="../erdconfig.ui" line="33"/>
      <source>Maximum number of tables for ERD editor</source>
      <translation>Số lượng bảng tối đa cho trình chỉnh sửa ERD</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="40"/>
      <source>Setting this value too high may cause the application to slow down or become unresponsive when opening the ERD editor.</source>
      <translation>Đặt giá trị này quá cao có thể khiến ứng dụng chậm lại hoặc không phản hồi khi mở trình chỉnh sửa ERD.</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="56"/>
      <source>Starts panning as soon as the Space key is pressed, without requiring a mouse button press.</source>
      <translation>Bắt đầu kéo khung nhìn ngay khi phím Space được nhấn, không cần nhấn nút chuột.</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="59"/>
      <source>Pan view with Space only</source>
      <translation>Chỉ dùng Space để kéo khung nhìn</translation>
    </message>
  </context>
  <context>
    <name>ErdConnectionPanel</name>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="59"/>
      <source>Foreign key properties</source>
      <translation>Thuộc tính khóa ngoại</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="83"/>
      <source>Composite relation (multiple columns)</source>
      <translation>Quan hệ phức hợp (nhiều cột)</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="137"/>
      <source>Referencing (child) table:</source>
      <translation>Bảng tham chiếu (con):</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="156"/>
      <source>Referencing (child) column:</source>
      <translation>Cột tham chiếu (con):</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="51"/>
      <source>ERD side panel for relation between tables &quot;%1&quot; and &quot;%2&quot; has uncommitted modifications.</source>
      <translation>Bảng bên ERD cho quan hệ giữa các bảng &quot;%1&quot; và &quot;%2&quot; có các sửa đổi chưa xác nhận.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="57"/>
      <source>Apply changes to diagram</source>
      <comment>ERD editor</comment>
      <translation>Áp dụng thay đổi vào sơ đồ</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="58"/>
      <source>Abort changes</source>
      <comment>ERD editor</comment>
      <translation>Hủy thay đổi</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="240"/>
      <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>Sửa đổi quan hệ giữa &quot;%1&quot; và &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="242"/>
      <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot; - change target to &quot;%3&quot;.</source>
      <translation>Sửa đổi quan hệ giữa &quot;%1&quot; và &quot;%2&quot; - đổi đích thành &quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="252"/>
      <source>Failed to execute DDL required for relation modification. Details: %1</source>
      <translation>Không thể thực thi DDL cần thiết để sửa đổi quan hệ. Chi tiết: %1</translation>
    </message>
  </context>
  <context>
    <name>ErdEditorPlugin</name>
    <message>
      <location filename="../erdeditorplugin.cpp" line="20"/>
      <source>Open ERD editor</source>
      <translation>Mở trình chỉnh sửa ERD</translation>
    </message>
    <message>
      <location filename="../erdeditorplugin.cpp" line="74"/>
      <source>ERD editor cannot open because the database contains %1 tables, exceeding the configured limit of %2 tables. You can increase this limit in the settings, but higher values may slow down or freeze the application.</source>
      <translation>Không thể mở trình chỉnh sửa ERD vì cơ sở dữ liệu chứa %1 bảng, vượt quá giới hạn đã cấu hình là %2 bảng. Bạn có thể tăng giới hạn này trong cài đặt, nhưng giá trị cao hơn có thể làm chậm hoặc treo ứng dụng.</translation>
    </message>
  </context>
  <context>
    <name>ErdScene</name>
    <message>
      <location filename="../scene/erdscene.cpp" line="530"/>
      <source>Delete multiple diagram elements.</source>
      <comment>ERD editor</comment>
      <translation>Xóa nhiều phần tử sơ đồ.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="547"/>
      <source>Failed to execute the undo DDL. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>Không thể thực thi DDL hoàn tác. Chi tiết: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="569"/>
      <source>Failed to execute the redo DDL. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>Không thể thực thi DDL làm lại. Chi tiết: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="596"/>
      <source>Failed to execute DDL required for table deletion. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>Không thể thực thi DDL cần thiết để xóa bảng. Chi tiết: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="607"/>
      <source>Delete foreign key between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>Xóa khóa ngoại giữa &quot;%1&quot; và &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="616"/>
      <source>Failed to execute DDL required for foreign key deletion. Details: %1</source>
      <translation>Không thể thực thi DDL cần thiết để xóa khóa ngoại. Chi tiết: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="824"/>
      <source>Arrange entities</source>
      <translation>Sắp xếp thực thể</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="825"/>
      <source>Are you sure you want to automatically arrange the entities on the diagram? This action will overwrite the current layout, and any manual adjustments will be lost.</source>
      <translation>Bạn có chắc chắn muốn tự động sắp xếp các thực thể trên sơ đồ không? Hành động này sẽ ghi đè bố cục hiện tại và mọi điều chỉnh thủ công sẽ bị mất.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="845"/>
      <source>Change color of table &quot;%1&quot; to %2.</source>
      <translation>Đổi màu của bảng &quot;%1&quot; thành %2.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="851"/>
      <source>Change color of multiple tables.</source>
      <translation>Đổi màu của nhiều bảng.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="696"/>
      <source>Apply diagram layout</source>
      <translation>Áp dụng bố cục sơ đồ</translation>
    </message>
  </context>
  <context>
    <name>ErdTableWindow</name>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="29"/>
      <source>Apply changes to diagram</source>
      <comment>ERD editor</comment>
      <translation>Áp dụng thay đổi vào sơ đồ</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="30"/>
      <source>Abort changes</source>
      <comment>ERD editor</comment>
      <translation>Hủy thay đổi</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="49"/>
      <source>ERD side panel for table &quot;%1&quot; has uncommitted modifications.</source>
      <translation>Bảng bên ERD cho bảng &quot;%1&quot; có các sửa đổi chưa xác nhận.</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="106"/>
      <source>Invalid table changes</source>
      <comment>ERD editor</comment>
      <translation>Thay đổi bảng không hợp lệ</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="108"/>
      <source>&lt;b&gt;The table contains invalid changes&lt;/b&gt;</source>
      <comment>ERD editor</comment>
      <translation>&lt;b&gt;Bảng chứa các thay đổi không hợp lệ&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="109"/>
      <source>Some of the changes you made cannot be applied because they contain errors.&lt;br&gt;&lt;br&gt;&lt;b&gt;Errors:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;You can &lt;b&gt;return to editing&lt;/b&gt; and fix the problems, or &lt;b&gt;discard your changes&lt;/b&gt; and restore the previous state of the table.</source>
      <comment>ERD editor</comment>
      <translation>Một số thay đổi bạn đã thực hiện không thể áp dụng vì chúng chứa lỗi.&lt;br&gt;&lt;br&gt;&lt;b&gt;Lỗi:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;Bạn có thể &lt;b&gt;quay lại chỉnh sửa&lt;/b&gt; và khắc phục sự cố, hoặc &lt;b&gt;hủy bỏ các thay đổi của bạn&lt;/b&gt; và khôi phục trạng thái trước đó của bảng.</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="118"/>
      <source>Fix errors</source>
      <comment>ERD editor</comment>
      <translation>Sửa lỗi</translation>
    </message>
  </context>
  <context>
    <name>ErdView</name>
    <message>
      <location filename="../scene/erdview.cpp" line="323"/>
      <source>Cannot edit compound foreign keys this way. Such connections have to be edited through the side panel.</source>
      <comment>ERD editor</comment>
      <translation>Không thể chỉnh sửa khóa ngoại phức hợp theo cách này. Các kết nối như vậy phải được chỉnh sửa thông qua bảng bên.</translation>
    </message>
    <message>
      <location filename="../scene/erdview.cpp" line="633"/>
      <source>Move table &quot;%1&quot;</source>
      <translation>Di chuyển bảng &quot;%1&quot;</translation>
    </message>
    <message>
      <location filename="../scene/erdview.cpp" line="639"/>
      <source>Move tables: %1</source>
      <translation>Di chuyển bảng: %1</translation>
    </message>
  </context>
  <context>
    <name>ErdWindow</name>
    <message>
      <location filename="../erdwindow.ui" line="86"/>
      <source>Select an item to edit its properties</source>
      <translation>Chọn một mục để chỉnh sửa thuộc tính của nó</translation>
    </message>
    <message>
      <location filename="../erdwindow.ui" line="114"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Hold the Spacebar and drag with the mouse to pan the diagram freely without selecting any items.&lt;/p&gt;&lt;p&gt;- Use the mouse wheel to zoom in and out.&lt;/p&gt;&lt;p&gt;- Deselect the table (or click Commit in the side panel toolbar) to apply the side panel changes to the diagram.&lt;/p&gt;&lt;p&gt;- Press Esc (or click Rollback in the side panel toolbar) to discard the side panel changes.&lt;/p&gt;&lt;p&gt;- Double-Click on a table name or column to edit the name inline.&lt;/p&gt;&lt;p&gt;- Shift-Double-Click on a column to edit column details (datatype, constraints).&lt;/p&gt;&lt;p&gt;- To create a foreign key between table, click the middle mouse button on the table columns you want to connect.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;All diagram changes remain pending until you explicitly commit or roll them back&lt;/span&gt; using the toolbar buttons in the top-left corner of the diagram.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Learn more (click to open online help page)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Giữ phím Spacebar và kéo bằng chuột để kéo sơ đồ tự do mà không chọn bất kỳ mục nào.&lt;/p&gt;&lt;p&gt;- Dùng bánh xe chuột để phóng to và thu nhỏ.&lt;/p&gt;&lt;p&gt;- Bỏ chọn bảng (hoặc nhấp Xác nhận trên thanh công cụ bảng bên) để áp dụng các thay đổi của bảng bên vào sơ đồ.&lt;/p&gt;&lt;p&gt;- Nhấn Esc (hoặc nhấp Khôi phục trên thanh công cụ bảng bên) để hủy bỏ các thay đổi của bảng bên.&lt;/p&gt;&lt;p&gt;- Nhấp đúp vào tên bảng hoặc cột để chỉnh sửa tên trực tiếp tại chỗ.&lt;/p&gt;&lt;p&gt;- Shift-nhấp đúp vào một cột để chỉnh sửa chi tiết cột (kiểu dữ liệu, ràng buộc).&lt;/p&gt;&lt;p&gt;- Để tạo khóa ngoại giữa các bảng, hãy nhấp nút chuột giữa vào các cột bảng bạn muốn kết nối.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;Tất cả thay đổi sơ đồ vẫn ở trạng thái đang chờ cho đến khi bạn xác nhận hoặc hoàn nguyên chúng một cách rõ ràng&lt;/span&gt; bằng các nút trên thanh công cụ ở góc trên bên trái của sơ đồ.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Tìm hiểu thêm (nhấp để mở trang trợ giúp trực tuyến)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="165"/>
      <source>Cancels ongoing action</source>
      <comment>ERD editor</comment>
      <translation>Hủy hành động đang diễn ra</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="166"/>
      <source>Create a table</source>
      <comment>ERD editor</comment>
      <translation>Tạo bảng</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="168"/>
      <location filename="../erdwindow.cpp" line="649"/>
      <source>Reload schema</source>
      <comment>ERD editor</comment>
      <translation>Tải lại lược đồ</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="169"/>
      <source>Commit all pending changes</source>
      <comment>ERD editor</comment>
      <translation>Xác nhận tất cả thay đổi đang chờ</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="170"/>
      <source>Revert diagram to initial state</source>
      <comment>ERD editor</comment>
      <translation>Hoàn nguyên sơ đồ về trạng thái ban đầu</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="172"/>
      <source>Undo</source>
      <comment>ERD editor</comment>
      <translation>Hoàn tác</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="173"/>
      <source>Redo</source>
      <comment>ERD editor</comment>
      <translation>Làm lại</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="189"/>
      <source>Create a table</source>
      <translation>Tạo bảng</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="202"/>
      <source>Select all</source>
      <translation>Chọn tất cả</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="311"/>
      <source>Filter items</source>
      <comment>ERD editor</comment>
      <translation>Lọc mục</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="312"/>
      <source>Items that don’t match the filter will be dimmed.</source>
      <comment>ERD editor</comment>
      <translation>Các mục không khớp với bộ lọc sẽ bị làm mờ.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="448"/>
      <source>table name</source>
      <comment>ERD editor</comment>
      <translation>tên bảng</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="450"/>
      <source>column name</source>
      <comment>ERD editor</comment>
      <translation>tên cột</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="570"/>
      <source>All changes have been successfully applied to the database.</source>
      <comment>ERD editor</comment>
      <translation>Tất cả thay đổi đã được áp dụng thành công vào cơ sở dữ liệu.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="578"/>
      <source>The changes were successfully committed. No modifications to the database schema were required.</source>
      <comment>ERD editor</comment>
      <translation>Các thay đổi đã được xác nhận thành công. Không cần sửa đổi lược đồ cơ sở dữ liệu.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="586"/>
      <source>Failed to apply changes to the database. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>Không thể áp dụng thay đổi vào cơ sở dữ liệu. Chi tiết: %1</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="650"/>
      <source>This action will discard all your pending changes and reload the diagram from the current database schema. The undo/redo history will be cleared. Do you want to proceed?</source>
      <translation>Hành động này sẽ hủy bỏ tất cả thay đổi đang chờ của bạn và tải lại sơ đồ từ lược đồ cơ sở dữ liệu hiện tại. Lịch sử hoàn tác/làm lại sẽ bị xóa. Bạn có muốn tiếp tục không?</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="833"/>
      <source>ERD window &quot;%1&quot; has uncommitted changes.</source>
      <translation>Cửa sổ ERD &quot;%1&quot; có các thay đổi chưa xác nhận.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="1145"/>
      <source>ERD editor (%1)</source>
      <translation>Trình chỉnh sửa ERD (%1)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="1147"/>
      <source>ERD editor</source>
      <translation>Trình chỉnh sửa ERD</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="181"/>
      <source>The number of changes pending for commit. Click to see details.</source>
      <comment>ERD editor</comment>
      <translation>Số lượng thay đổi đang chờ xác nhận. Nhấp để xem chi tiết.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="190"/>
      <source>Add a foreign key</source>
      <comment>ERD editor</comment>
      <translation>Thêm khóa ngoại</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="192"/>
      <source>Delete selected items</source>
      <comment>ERD editor</comment>
      <translation>Xóa các mục đã chọn</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="198"/>
      <source>Auto-arrange (local forces)</source>
      <comment>ERD editor</comment>
      <translation>Tự động sắp xếp (lực cục bộ)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="199"/>
      <source>Auto-arrange (global balance)</source>
      <comment>ERD editor</comment>
      <translation>Tự động sắp xếp (cân bằng toàn cục)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="213"/>
      <source>Set table color</source>
      <comment>ERD editor</comment>
      <translation>Đặt màu bảng</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="241"/>
      <source>Use straight line</source>
      <comment>ERD editor</comment>
      <translation>Dùng đường thẳng</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="242"/>
      <source>Use curvy line</source>
      <comment>ERD editor</comment>
      <translation>Dùng đường cong</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="243"/>
      <source>Use square line</source>
      <comment>ERD editor</comment>
      <translation>Dùng đường gấp khúc vuông góc</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="254"/>
      <source>Choose line type</source>
      <comment>ERD editor</comment>
      <translation>Chọn kiểu đường</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../changes/erdchangedeleteentity.cpp" line="48"/>
      <source>Drop table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>Xóa bảng &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangemodifyentity.cpp" line="61"/>
      <source>Modify table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>Sửa đổi bảng &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangenewentity.cpp" line="54"/>
      <source>Create table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>Tạo bảng &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdeffectivechangemerger.cpp" line="31"/>
      <source>Failed to create in-memory databases required for change compacting.</source>
      <translation>Không thể tạo các cơ sở dữ liệu trong bộ nhớ cần thiết để thu gọn thay đổi.</translation>
    </message>
    <message>
      <location filename="../changes/erdeffectivechangemerger.cpp" line="399"/>
      <source>Drop tables: %1</source>
      <comment>ERD editor</comment>
      <translation>Xóa bảng: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="149"/>
      <source>Could not commit changes for finalized ERD connection.</source>
      <translation>Không thể xác nhận thay đổi cho kết nối ERD đã hoàn tất.</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="155"/>
      <source>Update relationship from &quot;%1&quot;-&quot;%2&quot; to &quot;%1&quot;-&quot;%3&quot;.</source>
      <translation>Cập nhật quan hệ từ &quot;%1&quot;-&quot;%2&quot; thành &quot;%1&quot;-&quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="157"/>
      <source>Create relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>Tạo quan hệ giữa &quot;%1&quot; và &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangemoveentity.cpp" line="28"/>
      <source>Move table &quot;%1&quot;</source>
      <translation>Di chuyển bảng &quot;%1&quot;</translation>
    </message>
  </context>
</TS>

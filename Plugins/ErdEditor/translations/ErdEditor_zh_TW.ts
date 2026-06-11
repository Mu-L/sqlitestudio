<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh-TW" sourcelanguage="en">
<context>
    <name>ErdChangeRegistryDialog</name>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="14"/>
        <source>Pending changes registry</source>
        <translation>待提交變更記錄</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="65"/>
        <source>Pending changes</source>
        <translation>待提交變更</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="105"/>
        <source>DDL preview</source>
        <translation>DDL 預覽</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="143"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Shows the changes as they will be committed. Redundant or mutually cancelling steps are merged or removed from the list.&lt;br/&gt;When disabled, all individual undo and redo steps are shown.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;顯示將提交的變更。多餘或相互抵消的步驟會合併或從清單中移除。&lt;br/&gt;停用時，會顯示所有個別的復原與重做步驟。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="146"/>
        <source>Show effective changes only</source>
        <translation>僅顯示有效變更</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="153"/>
        <source>&lt;html&gt;&lt;body&gt;Shows changes that do not modify the database schema, but only affect the diagram (for example, table position changes). &lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;body&gt;顯示不會修改資料庫結構、僅影響圖表的變更（例如表格位置變更）。&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.ui" line="156"/>
        <source>Show non-schema changes</source>
        <translation>顯示非結構變更</translation>
    </message>
    <message>
        <location filename="../changes/erdchangeregistrydialog.cpp" line="58"/>
        <source>-- This is a change applied only to the diagram. It has no database schema efects.</source>
        <comment>ERD editor</comment>
        <translation>-- 這是僅套用至圖表的變更。它對資料庫結構沒有影響。</translation>
    </message>
</context>
<context>
    <name>ErdConfig</name>
    <message>
        <location filename="../erdconfig.ui" line="33"/>
        <source>Maximum number of tables for ERD editor</source>
        <translation>ERD 編輯器的最大表格數量</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="40"/>
        <source>Setting this value too high may cause the application to slow down or become unresponsive when opening the ERD editor.</source>
        <translation>將此值設定得過高，可能會導致開啟 ERD 編輯器時應用程式變慢或沒有回應。</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="56"/>
        <source>Starts panning as soon as the Space key is pressed, without requiring a mouse button press.</source>
        <translation>按下空白鍵後立即開始平移，不需要按下滑鼠按鈕。</translation>
    </message>
    <message>
        <location filename="../erdconfig.ui" line="59"/>
        <source>Pan view with Space only</source>
        <translation>僅使用空白鍵平移檢視</translation>
    </message>
</context>
<context>
    <name>ErdConnectionPanel</name>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="59"/>
        <source>Foreign key properties</source>
        <translation>外來鍵屬性</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="83"/>
        <source>Composite relation (multiple columns)</source>
        <translation>複合關聯（多個欄位）</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="137"/>
        <source>Referencing (child) table:</source>
        <translation>參照（子）表格：</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.ui" line="156"/>
        <source>Referencing (child) column:</source>
        <translation>參照（子）欄位：</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="51"/>
        <source>ERD side panel for relation between tables &quot;%1&quot; and &quot;%2&quot; has uncommitted modifications.</source>
        <translation>表格 &quot;%1&quot; 與 &quot;%2&quot; 之間關聯的 ERD 側邊面板有未提交的修改。</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="57"/>
        <source>Apply changes to diagram</source>
        <comment>ERD editor</comment>
        <translation>將變更套用至圖表</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="58"/>
        <source>Abort changes</source>
        <comment>ERD editor</comment>
        <translation>中止變更</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="240"/>
        <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>修改 &quot;%1&quot; 與 &quot;%2&quot; 之間的關聯。</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="242"/>
        <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot; - change target to &quot;%3&quot;.</source>
        <translation>修改 &quot;%1&quot; 與 &quot;%2&quot; 之間的關聯 - 將目標變更為 &quot;%3&quot;。</translation>
    </message>
    <message>
        <location filename="../panel/erdconnectionpanel.cpp" line="252"/>
        <source>Failed to execute DDL required for relation modification. Details: %1</source>
        <translation>執行關聯修改所需的 DDL 失敗。詳細資訊：%1</translation>
    </message>
</context>
<context>
    <name>ErdEditorPlugin</name>
    <message>
        <location filename="../erdeditorplugin.cpp" line="20"/>
        <source>Open ERD editor</source>
        <translation>開啟 ERD 編輯器</translation>
    </message>
    <message>
        <location filename="../erdeditorplugin.cpp" line="74"/>
        <source>ERD editor cannot open because the database contains %1 tables, exceeding the configured limit of %2 tables. You can increase this limit in the settings, but higher values may slow down or freeze the application.</source>
        <translation>無法開啟 ERD 編輯器，因為資料庫包含 %1 個表格，超過設定的 %2 個表格限制。您可以在設定中提高此限制，但較高的值可能會使應用程式變慢或凍結。</translation>
    </message>
</context>
<context>
    <name>ErdScene</name>
    <message>
        <location filename="../scene/erdscene.cpp" line="530"/>
        <source>Delete multiple diagram elements.</source>
        <comment>ERD editor</comment>
        <translation>刪除多個圖表元素。</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="547"/>
        <source>Failed to execute the undo DDL. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>執行復原 DDL 失敗。詳細資訊：%1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="569"/>
        <source>Failed to execute the redo DDL. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>執行重做 DDL 失敗。詳細資訊：%1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="596"/>
        <source>Failed to execute DDL required for table deletion. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>執行刪除表格所需的 DDL 失敗。詳細資訊：%1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="607"/>
        <source>Delete foreign key between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>刪除 &quot;%1&quot; 與 &quot;%2&quot; 之間的外來鍵。</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="616"/>
        <source>Failed to execute DDL required for foreign key deletion. Details: %1</source>
        <translation>執行刪除外來鍵所需的 DDL 失敗。詳細資訊：%1</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="824"/>
        <source>Arrange entities</source>
        <translation>排列實體</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="825"/>
        <source>Are you sure you want to automatically arrange the entities on the diagram? This action will overwrite the current layout, and any manual adjustments will be lost.</source>
        <translation>您確定要自動排列圖表上的實體嗎？此動作將覆寫目前配置，且任何手動調整都會遺失。</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="845"/>
        <source>Change color of table &quot;%1&quot; to %2.</source>
        <translation>將表格 &quot;%1&quot; 的顏色變更為 %2。</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="851"/>
        <source>Change color of multiple tables.</source>
        <translation>變更多個表格的顏色。</translation>
    </message>
    <message>
        <location filename="../scene/erdscene.cpp" line="696"/>
        <source>Apply diagram layout</source>
        <translation>套用圖表配置</translation>
    </message>
</context>
<context>
    <name>ErdTableWindow</name>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="29"/>
        <source>Apply changes to diagram</source>
        <comment>ERD editor</comment>
        <translation>將變更套用至圖表</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="30"/>
        <source>Abort changes</source>
        <comment>ERD editor</comment>
        <translation>中止變更</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="49"/>
        <source>ERD side panel for table &quot;%1&quot; has uncommitted modifications.</source>
        <translation>表格 &quot;%1&quot; 的 ERD 側邊面板有未提交的修改。</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="106"/>
        <source>Invalid table changes</source>
        <comment>ERD editor</comment>
        <translation>無效的表格變更</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="108"/>
        <source>&lt;b&gt;The table contains invalid changes&lt;/b&gt;</source>
        <comment>ERD editor</comment>
        <translation>&lt;b&gt;表格包含無效的變更&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="109"/>
        <source>Some of the changes you made cannot be applied because they contain errors.&lt;br&gt;&lt;br&gt;&lt;b&gt;Errors:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;You can &lt;b&gt;return to editing&lt;/b&gt; and fix the problems, or &lt;b&gt;discard your changes&lt;/b&gt; and restore the previous state of the table.</source>
        <comment>ERD editor</comment>
        <translation>您所做的部分變更無法套用，因為其中包含錯誤。&lt;br&gt;&lt;br&gt;&lt;b&gt;錯誤：&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;您可以&lt;b&gt;返回編輯&lt;/b&gt;並修正問題，或&lt;b&gt;捨棄您的變更&lt;/b&gt;並還原表格先前的狀態。</translation>
    </message>
    <message>
        <location filename="../panel/erdtablewindow.cpp" line="118"/>
        <source>Fix errors</source>
        <comment>ERD editor</comment>
        <translation>修正錯誤</translation>
    </message>
</context>
<context>
    <name>ErdView</name>
    <message>
        <location filename="../scene/erdview.cpp" line="323"/>
        <source>Cannot edit compound foreign keys this way. Such connections have to be edited through the side panel.</source>
        <comment>ERD editor</comment>
        <translation>無法以這種方式編輯複合外來鍵。此類連線必須透過側邊面板編輯。</translation>
    </message>
    <message>
        <location filename="../scene/erdview.cpp" line="633"/>
        <source>Move table &quot;%1&quot;</source>
        <translation>移動表格 &quot;%1&quot;</translation>
    </message>
    <message>
        <location filename="../scene/erdview.cpp" line="639"/>
        <source>Move tables: %1</source>
        <translation>移動表格：%1</translation>
    </message>
</context>
<context>
    <name>ErdWindow</name>
    <message>
        <location filename="../erdwindow.ui" line="86"/>
        <source>Select an item to edit its properties</source>
        <translation>選取項目以編輯其屬性</translation>
    </message>
    <message>
        <location filename="../erdwindow.ui" line="114"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Hold the Spacebar and drag with the mouse to pan the diagram freely without selecting any items.&lt;/p&gt;&lt;p&gt;- Use the mouse wheel to zoom in and out.&lt;/p&gt;&lt;p&gt;- Deselect the table (or click Commit in the side panel toolbar) to apply the side panel changes to the diagram.&lt;/p&gt;&lt;p&gt;- Press Esc (or click Rollback in the side panel toolbar) to discard the side panel changes.&lt;/p&gt;&lt;p&gt;- Double-Click on a table name or column to edit the name inline.&lt;/p&gt;&lt;p&gt;- Shift-Double-Click on a column to edit column details (datatype, constraints).&lt;/p&gt;&lt;p&gt;- To create a foreign key between table, click the middle mouse button on the table columns you want to connect.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;All diagram changes remain pending until you explicitly commit or roll them back&lt;/span&gt; using the toolbar buttons in the top-left corner of the diagram.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Learn more (click to open online help page)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- 按住空白鍵並用滑鼠拖曳，即可自由平移圖表而不選取任何項目。&lt;/p&gt;&lt;p&gt;- 使用滑鼠滾輪放大與縮小。&lt;/p&gt;&lt;p&gt;- 取消選取表格（或按一下側邊面板工具列中的提交），即可將側邊面板變更套用至圖表。&lt;/p&gt;&lt;p&gt;- 按 Esc（或按一下側邊面板工具列中的復原），即可捨棄側邊面板變更。&lt;/p&gt;&lt;p&gt;- 在表格名稱或欄位上按兩下，即可就地編輯名稱。&lt;/p&gt;&lt;p&gt;- 在欄位上按 Shift 並按兩下，即可編輯欄位詳細資料（資料型別、條件約束）。&lt;/p&gt;&lt;p&gt;- 若要在表格之間建立外來鍵，請在您要連接的表格欄位上按一下滑鼠中鍵。&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;所有圖表變更都會保持待提交狀態，直到您明確提交或復原它們&lt;/span&gt;，請使用圖表左上角工具列按鈕進行操作。&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;了解更多（按一下以開啟線上說明頁面）&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="165"/>
        <source>Cancels ongoing action</source>
        <comment>ERD editor</comment>
        <translation>取消進行中的動作</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="166"/>
        <source>Create a table</source>
        <comment>ERD editor</comment>
        <translation>建立表格</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="168"/>
        <location filename="../erdwindow.cpp" line="649"/>
        <source>Reload schema</source>
        <comment>ERD editor</comment>
        <translation>重新載入結構</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="169"/>
        <source>Commit all pending changes</source>
        <comment>ERD editor</comment>
        <translation>提交所有待提交變更</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="170"/>
        <source>Revert diagram to initial state</source>
        <comment>ERD editor</comment>
        <translation>將圖表還原至初始狀態</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="172"/>
        <source>Undo</source>
        <comment>ERD editor</comment>
        <translation>撤銷</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="173"/>
        <source>Redo</source>
        <comment>ERD editor</comment>
        <translation>重做</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="189"/>
        <source>Create a table</source>
        <translation>建立表格</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="202"/>
        <source>Select all</source>
        <translation>全選</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="311"/>
        <source>Filter items</source>
        <comment>ERD editor</comment>
        <translation>篩選項目</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="312"/>
        <source>Items that don’t match the filter will be dimmed.</source>
        <comment>ERD editor</comment>
        <translation>不符合篩選條件的項目會變暗。</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="448"/>
        <source>table name</source>
        <comment>ERD editor</comment>
        <translation>表格名稱</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="450"/>
        <source>column name</source>
        <comment>ERD editor</comment>
        <translation>欄位名稱</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="570"/>
        <source>All changes have been successfully applied to the database.</source>
        <comment>ERD editor</comment>
        <translation>所有變更已成功套用至資料庫。</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="578"/>
        <source>The changes were successfully committed. No modifications to the database schema were required.</source>
        <comment>ERD editor</comment>
        <translation>變更已成功提交。不需要修改資料庫結構。</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="586"/>
        <source>Failed to apply changes to the database. Details: %1</source>
        <comment>ERD editor</comment>
        <translation>將變更套用至資料庫失敗。詳細資訊：%1</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="650"/>
        <source>This action will discard all your pending changes and reload the diagram from the current database schema. The undo/redo history will be cleared. Do you want to proceed?</source>
        <translation>此動作將捨棄所有待提交變更，並從目前的資料庫結構重新載入圖表。復原/重做歷程記錄將被清除。您要繼續嗎？</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="833"/>
        <source>ERD window &quot;%1&quot; has uncommitted changes.</source>
        <translation>ERD 視窗 &quot;%1&quot; 有未提交的變更。</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="1145"/>
        <source>ERD editor (%1)</source>
        <translation>ERD 編輯器 (%1)</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="1147"/>
        <source>ERD editor</source>
        <translation>ERD 編輯器</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="181"/>
        <source>The number of changes pending for commit. Click to see details.</source>
        <comment>ERD editor</comment>
        <translation>待提交變更的數量。按一下以查看詳細資訊。</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="190"/>
        <source>Add a foreign key</source>
        <comment>ERD editor</comment>
        <translation>新增外來鍵</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="192"/>
        <source>Delete selected items</source>
        <comment>ERD editor</comment>
        <translation>刪除已選項目</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="198"/>
        <source>Auto-arrange (local forces)</source>
        <comment>ERD editor</comment>
        <translation>自動排列（局部作用力）</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="199"/>
        <source>Auto-arrange (global balance)</source>
        <comment>ERD editor</comment>
        <translation>自動排列（整體平衡）</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="213"/>
        <source>Set table color</source>
        <comment>ERD editor</comment>
        <translation>設定表格顏色</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="241"/>
        <source>Use straight line</source>
        <comment>ERD editor</comment>
        <translation>使用直線</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="242"/>
        <source>Use curvy line</source>
        <comment>ERD editor</comment>
        <translation>使用曲線</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="243"/>
        <source>Use square line</source>
        <comment>ERD editor</comment>
        <translation>使用方折線</translation>
    </message>
    <message>
        <location filename="../erdwindow.cpp" line="254"/>
        <source>Choose line type</source>
        <comment>ERD editor</comment>
        <translation>選擇線條類型</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../changes/erdchangedeleteentity.cpp" line="48"/>
        <source>Drop table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>刪除表格 &quot;%1&quot;。</translation>
    </message>
    <message>
        <location filename="../changes/erdchangemodifyentity.cpp" line="61"/>
        <source>Modify table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>修改表格 &quot;%1&quot;。</translation>
    </message>
    <message>
        <location filename="../changes/erdchangenewentity.cpp" line="54"/>
        <source>Create table &quot;%1&quot;.</source>
        <comment>ERD editor</comment>
        <translation>建立表格 &quot;%1&quot;。</translation>
    </message>
    <message>
        <location filename="../changes/erdeffectivechangemerger.cpp" line="31"/>
        <source>Failed to create in-memory databases required for change compacting.</source>
        <translation>建立變更壓縮所需的記憶體內資料庫失敗。</translation>
    </message>
    <message>
        <location filename="../changes/erdeffectivechangemerger.cpp" line="399"/>
        <source>Drop tables: %1</source>
        <comment>ERD editor</comment>
        <translation>刪除表格：%1</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="149"/>
        <source>Could not commit changes for finalized ERD connection.</source>
        <translation>無法提交已完成 ERD 連線的變更。</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="155"/>
        <source>Update relationship from &quot;%1&quot;-&quot;%2&quot; to &quot;%1&quot;-&quot;%3&quot;.</source>
        <translation>將關聯從 &quot;%1&quot;-&quot;%2&quot; 更新為 &quot;%1&quot;-&quot;%3&quot;。</translation>
    </message>
    <message>
        <location filename="../scene/erdconnection.cpp" line="157"/>
        <source>Create relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
        <translation>在 &quot;%1&quot; 與 &quot;%2&quot; 之間建立關聯。</translation>
    </message>
    <message>
        <location filename="../changes/erdchangemoveentity.cpp" line="28"/>
        <source>Move table &quot;%1&quot;</source>
        <translation>移動表格 &quot;%1&quot;</translation>
    </message>
</context>
</TS>

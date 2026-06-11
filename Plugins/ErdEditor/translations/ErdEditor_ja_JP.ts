<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ja" sourcelanguage="en">
  <context>
    <name>ErdChangeRegistryDialog</name>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="14"/>
      <source>Pending changes registry</source>
      <translation>保留中の変更レジストリ</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="65"/>
      <source>Pending changes</source>
      <translation>保留中の変更</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="105"/>
      <source>DDL preview</source>
      <translation>DDLプレビュー</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="143"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Shows the changes as they will be committed. Redundant or mutually cancelling steps are merged or removed from the list.&lt;br/&gt;When disabled, all individual undo and redo steps are shown.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;コミットされる状態で変更を表示します。冗長な手順や相互に打ち消し合う手順は、一覧内で統合または削除されます。&lt;br/&gt;無効にすると、個々の元に戻す手順とやり直し手順がすべて表示されます。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="146"/>
      <source>Show effective changes only</source>
      <translation>有効な変更のみ表示</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="153"/>
      <source>&lt;html&gt;&lt;body&gt;Shows changes that do not modify the database schema, but only affect the diagram (for example, table position changes). &lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;body&gt;データベーススキーマを変更せず、図にのみ影響する変更（たとえばテーブル位置の変更）を表示します。 &lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="156"/>
      <source>Show non-schema changes</source>
      <translation>非スキーマ変更を表示</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.cpp" line="58"/>
      <source>-- This is a change applied only to the diagram. It has no database schema efects.</source>
      <comment>ERD editor</comment>
      <translation>-- これは図にのみ適用される変更です。データベーススキーマへの影響はありません。</translation>
    </message>
  </context>
  <context>
    <name>ErdConfig</name>
    <message>
      <location filename="../erdconfig.ui" line="33"/>
      <source>Maximum number of tables for ERD editor</source>
      <translation>ERDエディターの最大テーブル数</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="40"/>
      <source>Setting this value too high may cause the application to slow down or become unresponsive when opening the ERD editor.</source>
      <translation>この値を高く設定しすぎると、ERDエディターを開く際にアプリケーションの動作が遅くなったり、応答しなくなったりする可能性があります。</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="56"/>
      <source>Starts panning as soon as the Space key is pressed, without requiring a mouse button press.</source>
      <translation>マウスボタンを押す必要なく、Spaceキーが押されるとすぐにパンを開始します。</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="59"/>
      <source>Pan view with Space only</source>
      <translation>Spaceのみでビューをパン</translation>
    </message>
  </context>
  <context>
    <name>ErdConnectionPanel</name>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="59"/>
      <source>Foreign key properties</source>
      <translation>外部キーのプロパティ</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="83"/>
      <source>Composite relation (multiple columns)</source>
      <translation>複合リレーション（複数列）</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="137"/>
      <source>Referencing (child) table:</source>
      <translation>参照元（子）テーブル：</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="156"/>
      <source>Referencing (child) column:</source>
      <translation>参照元（子）列：</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="51"/>
      <source>ERD side panel for relation between tables &quot;%1&quot; and &quot;%2&quot; has uncommitted modifications.</source>
      <translation>テーブル &quot;%1&quot; と &quot;%2&quot; の間のリレーション用ERDサイドパネルには、コミットされていない変更があります。</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="57"/>
      <source>Apply changes to diagram</source>
      <comment>ERD editor</comment>
      <translation>変更を図に適用</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="58"/>
      <source>Abort changes</source>
      <comment>ERD editor</comment>
      <translation>変更を中止</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="240"/>
      <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>&quot;%1&quot; と &quot;%2&quot; の間のリレーションを変更します。</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="242"/>
      <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot; - change target to &quot;%3&quot;.</source>
      <translation>&quot;%1&quot; と &quot;%2&quot; の間のリレーションを変更 - ターゲットを &quot;%3&quot; に変更します。</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="252"/>
      <source>Failed to execute DDL required for relation modification. Details: %1</source>
      <translation>リレーションの変更に必要なDDLを実行できませんでした。詳細: %1</translation>
    </message>
  </context>
  <context>
    <name>ErdEditorPlugin</name>
    <message>
      <location filename="../erdeditorplugin.cpp" line="20"/>
      <source>Open ERD editor</source>
      <translation>ERDエディターを開く</translation>
    </message>
    <message>
      <location filename="../erdeditorplugin.cpp" line="74"/>
      <source>ERD editor cannot open because the database contains %1 tables, exceeding the configured limit of %2 tables. You can increase this limit in the settings, but higher values may slow down or freeze the application.</source>
      <translation>データベースに %1 個のテーブルが含まれており、設定された上限の %2 個のテーブルを超えているため、ERDエディターを開けません。この上限は設定で増やせますが、値を高くするとアプリケーションが遅くなったりフリーズしたりする可能性があります。</translation>
    </message>
  </context>
  <context>
    <name>ErdScene</name>
    <message>
      <location filename="../scene/erdscene.cpp" line="530"/>
      <source>Delete multiple diagram elements.</source>
      <comment>ERD editor</comment>
      <translation>複数の図要素を削除します。</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="547"/>
      <source>Failed to execute the undo DDL. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>元に戻すDDLを実行できませんでした。詳細: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="569"/>
      <source>Failed to execute the redo DDL. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>やり直しDDLを実行できませんでした。詳細: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="596"/>
      <source>Failed to execute DDL required for table deletion. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>テーブルの削除に必要なDDLを実行できませんでした。詳細: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="607"/>
      <source>Delete foreign key between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>&quot;%1&quot; と &quot;%2&quot; の間の外部キーを削除します。</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="616"/>
      <source>Failed to execute DDL required for foreign key deletion. Details: %1</source>
      <translation>外部キーの削除に必要なDDLを実行できませんでした。詳細: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="824"/>
      <source>Arrange entities</source>
      <translation>エンティティを配置</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="825"/>
      <source>Are you sure you want to automatically arrange the entities on the diagram? This action will overwrite the current layout, and any manual adjustments will be lost.</source>
      <translation>図上のエンティティを自動的に配置してもよろしいですか？この操作により現在のレイアウトが上書きされ、手動での調整は失われます。</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="845"/>
      <source>Change color of table &quot;%1&quot; to %2.</source>
      <translation>テーブル &quot;%1&quot; の色を %2 に変更します。</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="851"/>
      <source>Change color of multiple tables.</source>
      <translation>複数のテーブルの色を変更します。</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="696"/>
      <source>Apply diagram layout</source>
      <translation>図のレイアウトを適用</translation>
    </message>
  </context>
  <context>
    <name>ErdTableWindow</name>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="29"/>
      <source>Apply changes to diagram</source>
      <comment>ERD editor</comment>
      <translation>変更を図に適用</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="30"/>
      <source>Abort changes</source>
      <comment>ERD editor</comment>
      <translation>変更を中止</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="49"/>
      <source>ERD side panel for table &quot;%1&quot; has uncommitted modifications.</source>
      <translation>テーブル &quot;%1&quot; 用ERDサイドパネルには、コミットされていない変更があります。</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="106"/>
      <source>Invalid table changes</source>
      <comment>ERD editor</comment>
      <translation>無効なテーブル変更</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="108"/>
      <source>&lt;b&gt;The table contains invalid changes&lt;/b&gt;</source>
      <comment>ERD editor</comment>
      <translation>&lt;b&gt;テーブルに無効な変更が含まれています&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="109"/>
      <source>Some of the changes you made cannot be applied because they contain errors.&lt;br&gt;&lt;br&gt;&lt;b&gt;Errors:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;You can &lt;b&gt;return to editing&lt;/b&gt; and fix the problems, or &lt;b&gt;discard your changes&lt;/b&gt; and restore the previous state of the table.</source>
      <comment>ERD editor</comment>
      <translation>行った変更の一部にはエラーが含まれているため適用できません。&lt;br&gt;&lt;br&gt;&lt;b&gt;エラー:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;&lt;b&gt;編集に戻る&lt;/b&gt;ことで問題を修正するか、&lt;b&gt;変更を破棄&lt;/b&gt;してテーブルを以前の状態に戻すことができます。</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="118"/>
      <source>Fix errors</source>
      <comment>ERD editor</comment>
      <translation>エラーを修正</translation>
    </message>
  </context>
  <context>
    <name>ErdView</name>
    <message>
      <location filename="../scene/erdview.cpp" line="323"/>
      <source>Cannot edit compound foreign keys this way. Such connections have to be edited through the side panel.</source>
      <comment>ERD editor</comment>
      <translation>複合外部キーはこの方法では編集できません。このような接続はサイドパネルから編集する必要があります。</translation>
    </message>
    <message>
      <location filename="../scene/erdview.cpp" line="633"/>
      <source>Move table &quot;%1&quot;</source>
      <translation>テーブル &quot;%1&quot; を移動</translation>
    </message>
    <message>
      <location filename="../scene/erdview.cpp" line="639"/>
      <source>Move tables: %1</source>
      <translation>テーブルを移動: %1</translation>
    </message>
  </context>
  <context>
    <name>ErdWindow</name>
    <message>
      <location filename="../erdwindow.ui" line="86"/>
      <source>Select an item to edit its properties</source>
      <translation>プロパティを編集する項目を選択</translation>
    </message>
    <message>
      <location filename="../erdwindow.ui" line="114"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Hold the Spacebar and drag with the mouse to pan the diagram freely without selecting any items.&lt;/p&gt;&lt;p&gt;- Use the mouse wheel to zoom in and out.&lt;/p&gt;&lt;p&gt;- Deselect the table (or click Commit in the side panel toolbar) to apply the side panel changes to the diagram.&lt;/p&gt;&lt;p&gt;- Press Esc (or click Rollback in the side panel toolbar) to discard the side panel changes.&lt;/p&gt;&lt;p&gt;- Double-Click on a table name or column to edit the name inline.&lt;/p&gt;&lt;p&gt;- Shift-Double-Click on a column to edit column details (datatype, constraints).&lt;/p&gt;&lt;p&gt;- To create a foreign key between table, click the middle mouse button on the table columns you want to connect.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;All diagram changes remain pending until you explicitly commit or roll them back&lt;/span&gt; using the toolbar buttons in the top-left corner of the diagram.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Learn more (click to open online help page)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Spaceキーを押しながらマウスでドラッグすると、項目を選択せずに図を自由にパンできます。&lt;/p&gt;&lt;p&gt;- マウスホイールを使用して拡大・縮小します。&lt;/p&gt;&lt;p&gt;- テーブルの選択を解除する（またはサイドパネルのツールバーでコミットをクリックする）と、サイドパネルの変更が図に適用されます。&lt;/p&gt;&lt;p&gt;- Escキーを押す（またはサイドパネルのツールバーでロールバックをクリックする）と、サイドパネルの変更が破棄されます。&lt;/p&gt;&lt;p&gt;- テーブル名または列をダブルクリックすると、名前をインラインで編集できます。&lt;/p&gt;&lt;p&gt;- 列をShiftキーを押しながらダブルクリックすると、列の詳細（データ型、制約）を編集できます。&lt;/p&gt;&lt;p&gt;- テーブル間に外部キーを作成するには、接続したいテーブル列をマウスの中ボタンでクリックします。&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;すべての図の変更は、明示的にコミットまたはロールバックするまで保留中のままです&lt;/span&gt;。図の左上隅にあるツールバーボタンを使用します。&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;詳細を見る（クリックしてオンラインヘルプページを開く）&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="165"/>
      <source>Cancels ongoing action</source>
      <comment>ERD editor</comment>
      <translation>進行中の操作をキャンセル</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="166"/>
      <source>Create a table</source>
      <comment>ERD editor</comment>
      <translation>テーブルを作成</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="168"/>
      <location filename="../erdwindow.cpp" line="649"/>
      <source>Reload schema</source>
      <comment>ERD editor</comment>
      <translation>スキーマを再読み込み</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="169"/>
      <source>Commit all pending changes</source>
      <comment>ERD editor</comment>
      <translation>保留中の変更をすべてコミット</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="170"/>
      <source>Revert diagram to initial state</source>
      <comment>ERD editor</comment>
      <translation>図を初期状態に戻す</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="172"/>
      <source>Undo</source>
      <comment>ERD editor</comment>
      <translation>元に戻す</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="173"/>
      <source>Redo</source>
      <comment>ERD editor</comment>
      <translation>やり直し</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="189"/>
      <source>Create a table</source>
      <translation>テーブルを作成</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="202"/>
      <source>Select all</source>
      <translation>すべて選択</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="311"/>
      <source>Filter items</source>
      <comment>ERD editor</comment>
      <translation>項目をフィルター</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="312"/>
      <source>Items that don’t match the filter will be dimmed.</source>
      <comment>ERD editor</comment>
      <translation>フィルターに一致しない項目は淡色表示されます。</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="448"/>
      <source>table name</source>
      <comment>ERD editor</comment>
      <translation>テーブル名</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="450"/>
      <source>column name</source>
      <comment>ERD editor</comment>
      <translation>列名</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="570"/>
      <source>All changes have been successfully applied to the database.</source>
      <comment>ERD editor</comment>
      <translation>すべての変更がデータベースに正常に適用されました。</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="578"/>
      <source>The changes were successfully committed. No modifications to the database schema were required.</source>
      <comment>ERD editor</comment>
      <translation>変更は正常にコミットされました。データベーススキーマの変更は必要ありませんでした。</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="586"/>
      <source>Failed to apply changes to the database. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>データベースへの変更の適用に失敗しました。詳細: %1</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="650"/>
      <source>This action will discard all your pending changes and reload the diagram from the current database schema. The undo/redo history will be cleared. Do you want to proceed?</source>
      <translation>この操作により、保留中の変更がすべて破棄され、現在のデータベーススキーマから図が再読み込みされます。元に戻す/やり直しの履歴は消去されます。続行しますか？</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="833"/>
      <source>ERD window &quot;%1&quot; has uncommitted changes.</source>
      <translation>ERDウィンドウ &quot;%1&quot; にはコミットされていない変更があります。</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="1145"/>
      <source>ERD editor (%1)</source>
      <translation>ERDエディター（%1）</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="1147"/>
      <source>ERD editor</source>
      <translation>ERDエディター</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="181"/>
      <source>The number of changes pending for commit. Click to see details.</source>
      <comment>ERD editor</comment>
      <translation>コミット待ちの変更数です。クリックすると詳細を表示します。</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="190"/>
      <source>Add a foreign key</source>
      <comment>ERD editor</comment>
      <translation>外部キーを追加</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="192"/>
      <source>Delete selected items</source>
      <comment>ERD editor</comment>
      <translation>選択した項目を削除</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="198"/>
      <source>Auto-arrange (local forces)</source>
      <comment>ERD editor</comment>
      <translation>自動配置（ローカルフォース）</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="199"/>
      <source>Auto-arrange (global balance)</source>
      <comment>ERD editor</comment>
      <translation>自動配置（グローバルバランス）</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="213"/>
      <source>Set table color</source>
      <comment>ERD editor</comment>
      <translation>テーブルの色を設定</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="241"/>
      <source>Use straight line</source>
      <comment>ERD editor</comment>
      <translation>直線を使用</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="242"/>
      <source>Use curvy line</source>
      <comment>ERD editor</comment>
      <translation>曲線を使用</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="243"/>
      <source>Use square line</source>
      <comment>ERD editor</comment>
      <translation>角線を使用</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="254"/>
      <source>Choose line type</source>
      <comment>ERD editor</comment>
      <translation>線の種類を選択</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../changes/erdchangedeleteentity.cpp" line="48"/>
      <source>Drop table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>テーブル &quot;%1&quot; を削除します。</translation>
    </message>
    <message>
      <location filename="../changes/erdchangemodifyentity.cpp" line="61"/>
      <source>Modify table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>テーブル &quot;%1&quot; を変更します。</translation>
    </message>
    <message>
      <location filename="../changes/erdchangenewentity.cpp" line="54"/>
      <source>Create table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>テーブル &quot;%1&quot; を作成します。</translation>
    </message>
    <message>
      <location filename="../changes/erdeffectivechangemerger.cpp" line="31"/>
      <source>Failed to create in-memory databases required for change compacting.</source>
      <translation>変更の圧縮に必要なインメモリデータベースを作成できませんでした。</translation>
    </message>
    <message>
      <location filename="../changes/erdeffectivechangemerger.cpp" line="399"/>
      <source>Drop tables: %1</source>
      <comment>ERD editor</comment>
      <translation>テーブルを削除: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="149"/>
      <source>Could not commit changes for finalized ERD connection.</source>
      <translation>確定済みのERD接続の変更をコミットできませんでした。</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="155"/>
      <source>Update relationship from &quot;%1&quot;-&quot;%2&quot; to &quot;%1&quot;-&quot;%3&quot;.</source>
      <translation>リレーションを &quot;%1&quot;-&quot;%2&quot; から &quot;%1&quot;-&quot;%3&quot; に更新します。</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="157"/>
      <source>Create relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>&quot;%1&quot; と &quot;%2&quot; の間にリレーションを作成します。</translation>
    </message>
    <message>
      <location filename="../changes/erdchangemoveentity.cpp" line="28"/>
      <source>Move table &quot;%1&quot;</source>
      <translation>テーブル &quot;%1&quot; を移動</translation>
    </message>
  </context>
</TS>

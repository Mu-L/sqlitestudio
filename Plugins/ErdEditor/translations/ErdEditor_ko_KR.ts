<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ko" sourcelanguage="en">
  <context>
    <name>ErdChangeRegistryDialog</name>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="14"/>
      <source>Pending changes registry</source>
      <translation>보류 중인 변경 사항 레지스트리</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="65"/>
      <source>Pending changes</source>
      <translation>보류 중인 변경 사항</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="105"/>
      <source>DDL preview</source>
      <translation>DDL 미리보기</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="143"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Shows the changes as they will be committed. Redundant or mutually cancelling steps are merged or removed from the list.&lt;br/&gt;When disabled, all individual undo and redo steps are shown.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;커밋될 형태로 변경 사항을 표시합니다. 중복되거나 서로 상쇄되는 단계는 병합되거나 목록에서 제거됩니다.&lt;br/&gt;비활성화하면 개별 실행 취소 및 다시 실행 단계가 모두 표시됩니다.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="146"/>
      <source>Show effective changes only</source>
      <translation>유효한 변경 사항만 표시</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="153"/>
      <source>&lt;html&gt;&lt;body&gt;Shows changes that do not modify the database schema, but only affect the diagram (for example, table position changes). &lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;body&gt;데이터베이스 스키마를 수정하지 않고 다이어그램에만 영향을 주는 변경 사항(예: 테이블 위치 변경)을 표시합니다. &lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.ui" line="156"/>
      <source>Show non-schema changes</source>
      <translation>스키마와 무관한 변경 사항 표시</translation>
    </message>
    <message>
      <location filename="../changes/erdchangeregistrydialog.cpp" line="58"/>
      <source>-- This is a change applied only to the diagram. It has no database schema efects.</source>
      <comment>ERD editor</comment>
      <translation>-- 이것은 다이어그램에만 적용되는 변경 사항입니다. 데이터베이스 스키마에는 영향을 주지 않습니다.</translation>
    </message>
  </context>
  <context>
    <name>ErdConfig</name>
    <message>
      <location filename="../erdconfig.ui" line="33"/>
      <source>Maximum number of tables for ERD editor</source>
      <translation>ERD 편집기의 최대 테이블 수</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="40"/>
      <source>Setting this value too high may cause the application to slow down or become unresponsive when opening the ERD editor.</source>
      <translation>이 값을 너무 높게 설정하면 ERD 편집기를 열 때 애플리케이션이 느려지거나 응답하지 않을 수 있습니다.</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="56"/>
      <source>Starts panning as soon as the Space key is pressed, without requiring a mouse button press.</source>
      <translation>마우스 버튼을 누를 필요 없이 스페이스 키를 누르는 즉시 패닝을 시작합니다.</translation>
    </message>
    <message>
      <location filename="../erdconfig.ui" line="59"/>
      <source>Pan view with Space only</source>
      <translation>스페이스 키만으로 보기 패닝</translation>
    </message>
  </context>
  <context>
    <name>ErdConnectionPanel</name>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="59"/>
      <source>Foreign key properties</source>
      <translation>외래 키 속성</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="83"/>
      <source>Composite relation (multiple columns)</source>
      <translation>복합 관계(여러 열)</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="137"/>
      <source>Referencing (child) table:</source>
      <translation>참조하는(자식) 테이블:</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.ui" line="156"/>
      <source>Referencing (child) column:</source>
      <translation>참조하는(자식) 열:</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="51"/>
      <source>ERD side panel for relation between tables &quot;%1&quot; and &quot;%2&quot; has uncommitted modifications.</source>
      <translation>테이블 &quot;%1&quot; 및 &quot;%2&quot; 사이의 관계에 대한 ERD 사이드 패널에 커밋되지 않은 수정 사항이 있습니다.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="57"/>
      <source>Apply changes to diagram</source>
      <comment>ERD editor</comment>
      <translation>변경 사항을 다이어그램에 적용</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="58"/>
      <source>Abort changes</source>
      <comment>ERD editor</comment>
      <translation>변경 사항 중단</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="240"/>
      <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>&quot;%1&quot; 및 &quot;%2&quot; 사이의 관계를 수정합니다.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="242"/>
      <source>Modify relationship between &quot;%1&quot; and &quot;%2&quot; - change target to &quot;%3&quot;.</source>
      <translation>&quot;%1&quot; 및 &quot;%2&quot; 사이의 관계를 수정합니다 - 대상을 &quot;%3&quot;로 변경합니다.</translation>
    </message>
    <message>
      <location filename="../panel/erdconnectionpanel.cpp" line="252"/>
      <source>Failed to execute DDL required for relation modification. Details: %1</source>
      <translation>관계 수정에 필요한 DDL을 실행하지 못했습니다. 세부 정보: %1</translation>
    </message>
  </context>
  <context>
    <name>ErdEditorPlugin</name>
    <message>
      <location filename="../erdeditorplugin.cpp" line="20"/>
      <source>Open ERD editor</source>
      <translation>ERD 편집기 열기</translation>
    </message>
    <message>
      <location filename="../erdeditorplugin.cpp" line="74"/>
      <source>ERD editor cannot open because the database contains %1 tables, exceeding the configured limit of %2 tables. You can increase this limit in the settings, but higher values may slow down or freeze the application.</source>
      <translation>데이터베이스에 %1개의 테이블이 있어 구성된 제한인 %2개 테이블을 초과하므로 ERD 편집기를 열 수 없습니다. 설정에서 이 제한을 늘릴 수 있지만, 값이 높을수록 애플리케이션이 느려지거나 멈출 수 있습니다.</translation>
    </message>
  </context>
  <context>
    <name>ErdScene</name>
    <message>
      <location filename="../scene/erdscene.cpp" line="530"/>
      <source>Delete multiple diagram elements.</source>
      <comment>ERD editor</comment>
      <translation>여러 다이어그램 요소를 삭제합니다.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="547"/>
      <source>Failed to execute the undo DDL. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>실행 취소 DDL을 실행하지 못했습니다. 세부 정보: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="569"/>
      <source>Failed to execute the redo DDL. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>다시 실행 DDL을 실행하지 못했습니다. 세부 정보: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="596"/>
      <source>Failed to execute DDL required for table deletion. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>테이블 삭제에 필요한 DDL을 실행하지 못했습니다. 세부 정보: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="607"/>
      <source>Delete foreign key between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>&quot;%1&quot; 및 &quot;%2&quot; 사이의 외래 키를 삭제합니다.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="616"/>
      <source>Failed to execute DDL required for foreign key deletion. Details: %1</source>
      <translation>외래 키 삭제에 필요한 DDL을 실행하지 못했습니다. 세부 정보: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="824"/>
      <source>Arrange entities</source>
      <translation>엔터티 정렬</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="825"/>
      <source>Are you sure you want to automatically arrange the entities on the diagram? This action will overwrite the current layout, and any manual adjustments will be lost.</source>
      <translation>다이어그램의 엔터티를 자동으로 정렬하시겠습니까? 이 작업은 현재 레이아웃을 덮어쓰며, 수동 조정 사항은 모두 손실됩니다.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="845"/>
      <source>Change color of table &quot;%1&quot; to %2.</source>
      <translation>테이블 &quot;%1&quot;의 색상을 %2로 변경합니다.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="851"/>
      <source>Change color of multiple tables.</source>
      <translation>여러 테이블의 색상을 변경합니다.</translation>
    </message>
    <message>
      <location filename="../scene/erdscene.cpp" line="696"/>
      <source>Apply diagram layout</source>
      <translation>다이어그램 레이아웃 적용</translation>
    </message>
  </context>
  <context>
    <name>ErdTableWindow</name>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="29"/>
      <source>Apply changes to diagram</source>
      <comment>ERD editor</comment>
      <translation>변경 사항을 다이어그램에 적용</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="30"/>
      <source>Abort changes</source>
      <comment>ERD editor</comment>
      <translation>변경 사항 중단</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="49"/>
      <source>ERD side panel for table &quot;%1&quot; has uncommitted modifications.</source>
      <translation>테이블 &quot;%1&quot;에 대한 ERD 사이드 패널에 커밋되지 않은 수정 사항이 있습니다.</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="106"/>
      <source>Invalid table changes</source>
      <comment>ERD editor</comment>
      <translation>잘못된 테이블 변경 사항</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="108"/>
      <source>&lt;b&gt;The table contains invalid changes&lt;/b&gt;</source>
      <comment>ERD editor</comment>
      <translation>&lt;b&gt;테이블에 잘못된 변경 사항이 포함되어 있습니다&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="109"/>
      <source>Some of the changes you made cannot be applied because they contain errors.&lt;br&gt;&lt;br&gt;&lt;b&gt;Errors:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;You can &lt;b&gt;return to editing&lt;/b&gt; and fix the problems, or &lt;b&gt;discard your changes&lt;/b&gt; and restore the previous state of the table.</source>
      <comment>ERD editor</comment>
      <translation>변경 사항 중 일부에 오류가 포함되어 있어 적용할 수 없습니다.&lt;br&gt;&lt;br&gt;&lt;b&gt;오류:&lt;/b&gt;&lt;br&gt;&lt;code&gt;%1&lt;/code&gt;&lt;br&gt;&lt;br&gt;&lt;b&gt;편집으로 돌아가&lt;/b&gt; 문제를 수정하거나, &lt;b&gt;변경 사항을 폐기&lt;/b&gt;하고 테이블의 이전 상태를 복원할 수 있습니다.</translation>
    </message>
    <message>
      <location filename="../panel/erdtablewindow.cpp" line="118"/>
      <source>Fix errors</source>
      <comment>ERD editor</comment>
      <translation>오류 수정</translation>
    </message>
  </context>
  <context>
    <name>ErdView</name>
    <message>
      <location filename="../scene/erdview.cpp" line="323"/>
      <source>Cannot edit compound foreign keys this way. Such connections have to be edited through the side panel.</source>
      <comment>ERD editor</comment>
      <translation>복합 외래 키는 이 방식으로 편집할 수 없습니다. 이러한 연결은 사이드 패널을 통해 편집해야 합니다.</translation>
    </message>
    <message>
      <location filename="../scene/erdview.cpp" line="633"/>
      <source>Move table &quot;%1&quot;</source>
      <translation>테이블 &quot;%1&quot; 이동</translation>
    </message>
    <message>
      <location filename="../scene/erdview.cpp" line="639"/>
      <source>Move tables: %1</source>
      <translation>테이블 이동: %1</translation>
    </message>
  </context>
  <context>
    <name>ErdWindow</name>
    <message>
      <location filename="../erdwindow.ui" line="86"/>
      <source>Select an item to edit its properties</source>
      <translation>속성을 편집할 항목을 선택하세요</translation>
    </message>
    <message>
      <location filename="../erdwindow.ui" line="114"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- Hold the Spacebar and drag with the mouse to pan the diagram freely without selecting any items.&lt;/p&gt;&lt;p&gt;- Use the mouse wheel to zoom in and out.&lt;/p&gt;&lt;p&gt;- Deselect the table (or click Commit in the side panel toolbar) to apply the side panel changes to the diagram.&lt;/p&gt;&lt;p&gt;- Press Esc (or click Rollback in the side panel toolbar) to discard the side panel changes.&lt;/p&gt;&lt;p&gt;- Double-Click on a table name or column to edit the name inline.&lt;/p&gt;&lt;p&gt;- Shift-Double-Click on a column to edit column details (datatype, constraints).&lt;/p&gt;&lt;p&gt;- To create a foreign key between table, click the middle mouse button on the table columns you want to connect.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;All diagram changes remain pending until you explicitly commit or roll them back&lt;/span&gt; using the toolbar buttons in the top-left corner of the diagram.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;Learn more (click to open online help page)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;- 스페이스바를 누른 상태로 마우스로 드래그하면 항목을 선택하지 않고 다이어그램을 자유롭게 이동할 수 있습니다.&lt;/p&gt;&lt;p&gt;- 마우스 휠을 사용하여 확대 및 축소합니다.&lt;/p&gt;&lt;p&gt;- 테이블 선택을 해제하거나(또는 사이드 패널 도구 모음에서 커밋을 클릭하면) 사이드 패널 변경 사항이 다이어그램에 적용됩니다.&lt;/p&gt;&lt;p&gt;- Esc 키를 누르거나(또는 사이드 패널 도구 모음에서 롤백을 클릭하면) 사이드 패널 변경 사항이 폐기됩니다.&lt;/p&gt;&lt;p&gt;- 테이블 이름 또는 열을 두 번 클릭하면 이름을 인라인으로 편집할 수 있습니다.&lt;/p&gt;&lt;p&gt;- Shift 키를 누른 상태로 열을 두 번 클릭하면 열 세부 정보(데이터 유형, 제약 조건)를 편집할 수 있습니다.&lt;/p&gt;&lt;p&gt;- 테이블 간에 외래 키를 생성하려면 연결하려는 테이블 열을 마우스 가운데 버튼으로 클릭합니다.&lt;/p&gt;&lt;p&gt;- &lt;span style=&quot; font-weight:700;&quot;&gt;모든 다이어그램 변경 사항은 명시적으로 커밋하거나 롤백할 때까지 보류 상태로 유지됩니다&lt;/span&gt;. 다이어그램의 왼쪽 위 모서리에 있는 도구 모음 버튼을 사용하세요.&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/pawelsalawa/letos/wiki/ERD-plugin-manual#usage&quot;&gt;&lt;span style=&quot; font-weight:700; text-decoration: underline; color:#058800;&quot;&gt;자세히 알아보기(온라인 도움말 페이지를 열려면 클릭)&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="165"/>
      <source>Cancels ongoing action</source>
      <comment>ERD editor</comment>
      <translation>진행 중인 작업을 취소합니다</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="166"/>
      <source>Create a table</source>
      <comment>ERD editor</comment>
      <translation>테이블 만들기</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="168"/>
      <location filename="../erdwindow.cpp" line="649"/>
      <source>Reload schema</source>
      <comment>ERD editor</comment>
      <translation>스키마 다시 로드</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="169"/>
      <source>Commit all pending changes</source>
      <comment>ERD editor</comment>
      <translation>보류 중인 모든 변경 사항 커밋</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="170"/>
      <source>Revert diagram to initial state</source>
      <comment>ERD editor</comment>
      <translation>다이어그램을 초기 상태로 되돌리기</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="172"/>
      <source>Undo</source>
      <comment>ERD editor</comment>
      <translation>실행 취소</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="173"/>
      <source>Redo</source>
      <comment>ERD editor</comment>
      <translation>다시 실행</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="189"/>
      <source>Create a table</source>
      <translation>테이블 만들기</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="202"/>
      <source>Select all</source>
      <translation>모두 선택</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="311"/>
      <source>Filter items</source>
      <comment>ERD editor</comment>
      <translation>항목 필터링</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="312"/>
      <source>Items that don’t match the filter will be dimmed.</source>
      <comment>ERD editor</comment>
      <translation>필터와 일치하지 않는 항목은 흐리게 표시됩니다.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="448"/>
      <source>table name</source>
      <comment>ERD editor</comment>
      <translation>테이블 이름</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="450"/>
      <source>column name</source>
      <comment>ERD editor</comment>
      <translation>열 이름</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="570"/>
      <source>All changes have been successfully applied to the database.</source>
      <comment>ERD editor</comment>
      <translation>모든 변경 사항이 데이터베이스에 성공적으로 적용되었습니다.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="578"/>
      <source>The changes were successfully committed. No modifications to the database schema were required.</source>
      <comment>ERD editor</comment>
      <translation>변경 사항이 성공적으로 커밋되었습니다. 데이터베이스 스키마를 수정할 필요가 없었습니다.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="586"/>
      <source>Failed to apply changes to the database. Details: %1</source>
      <comment>ERD editor</comment>
      <translation>데이터베이스에 변경 사항을 적용하지 못했습니다. 세부 정보: %1</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="650"/>
      <source>This action will discard all your pending changes and reload the diagram from the current database schema. The undo/redo history will be cleared. Do you want to proceed?</source>
      <translation>이 작업은 보류 중인 모든 변경 사항을 폐기하고 현재 데이터베이스 스키마에서 다이어그램을 다시 로드합니다. 실행 취소/다시 실행 기록이 지워집니다. 계속하시겠습니까?</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="833"/>
      <source>ERD window &quot;%1&quot; has uncommitted changes.</source>
      <translation>ERD 창 &quot;%1&quot;에 커밋되지 않은 변경 사항이 있습니다.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="1145"/>
      <source>ERD editor (%1)</source>
      <translation>ERD 편집기(%1)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="1147"/>
      <source>ERD editor</source>
      <translation>ERD 편집기</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="181"/>
      <source>The number of changes pending for commit. Click to see details.</source>
      <comment>ERD editor</comment>
      <translation>커밋 대기 중인 변경 사항 수입니다. 클릭하면 세부 정보를 볼 수 있습니다.</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="190"/>
      <source>Add a foreign key</source>
      <comment>ERD editor</comment>
      <translation>외래 키 추가</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="192"/>
      <source>Delete selected items</source>
      <comment>ERD editor</comment>
      <translation>선택한 항목 삭제</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="198"/>
      <source>Auto-arrange (local forces)</source>
      <comment>ERD editor</comment>
      <translation>자동 정렬(로컬 힘)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="199"/>
      <source>Auto-arrange (global balance)</source>
      <comment>ERD editor</comment>
      <translation>자동 정렬(전역 균형)</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="213"/>
      <source>Set table color</source>
      <comment>ERD editor</comment>
      <translation>테이블 색상 설정</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="241"/>
      <source>Use straight line</source>
      <comment>ERD editor</comment>
      <translation>직선 사용</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="242"/>
      <source>Use curvy line</source>
      <comment>ERD editor</comment>
      <translation>곡선 사용</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="243"/>
      <source>Use square line</source>
      <comment>ERD editor</comment>
      <translation>직각선 사용</translation>
    </message>
    <message>
      <location filename="../erdwindow.cpp" line="254"/>
      <source>Choose line type</source>
      <comment>ERD editor</comment>
      <translation>선 유형 선택</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../changes/erdchangedeleteentity.cpp" line="48"/>
      <source>Drop table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>테이블 &quot;%1&quot;을 삭제합니다.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangemodifyentity.cpp" line="61"/>
      <source>Modify table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>테이블 &quot;%1&quot;을 수정합니다.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangenewentity.cpp" line="54"/>
      <source>Create table &quot;%1&quot;.</source>
      <comment>ERD editor</comment>
      <translation>테이블 &quot;%1&quot;을 생성합니다.</translation>
    </message>
    <message>
      <location filename="../changes/erdeffectivechangemerger.cpp" line="31"/>
      <source>Failed to create in-memory databases required for change compacting.</source>
      <translation>변경 사항 압축에 필요한 인메모리 데이터베이스를 만들지 못했습니다.</translation>
    </message>
    <message>
      <location filename="../changes/erdeffectivechangemerger.cpp" line="399"/>
      <source>Drop tables: %1</source>
      <comment>ERD editor</comment>
      <translation>테이블 삭제: %1</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="149"/>
      <source>Could not commit changes for finalized ERD connection.</source>
      <translation>완료된 ERD 연결에 대한 변경 사항을 커밋할 수 없습니다.</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="155"/>
      <source>Update relationship from &quot;%1&quot;-&quot;%2&quot; to &quot;%1&quot;-&quot;%3&quot;.</source>
      <translation>관계를 &quot;%1&quot;-&quot;%2&quot;에서 &quot;%1&quot;-&quot;%3&quot;로 업데이트합니다.</translation>
    </message>
    <message>
      <location filename="../scene/erdconnection.cpp" line="157"/>
      <source>Create relationship between &quot;%1&quot; and &quot;%2&quot;.</source>
      <translation>&quot;%1&quot; 및 &quot;%2&quot; 사이의 관계를 만듭니다.</translation>
    </message>
    <message>
      <location filename="../changes/erdchangemoveentity.cpp" line="28"/>
      <source>Move table &quot;%1&quot;</source>
      <translation>테이블 &quot;%1&quot; 이동</translation>
    </message>
  </context>
</TS>

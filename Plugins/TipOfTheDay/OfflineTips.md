## Customize the interface to your liking

> Adjust fonts, icons, colors, and panel layout to match your workflow.

Most parts of Letos can be customized to match your preferences and workflow.

#### Appearance settings

The application style, font sizes, and SQL editor color scheme can be configured in the application settings. This allows you to adjust both the look and readability of the interface.

#### Quick font and icon scaling

Many interface elements support quick scaling without opening the configuration dialog. Hold **Ctrl** (or **Cmd** on macOS) and use the mouse wheel while hovering over a supported area, such as:

* Toolbars
* Database list panels
* SQL editor windows
* Data views

Depending on the area, this will adjust font sizes, icon sizes, or both.

#### Toolbar icon size

Toolbar icon size can also be changed from the **View** menu. The same options are available from the context menu that appears when you right-click the main toolbar.

#### Toolbar location

You can move the main window toolbars to the left or right side of the window if you prefer to maximize vertical space. Simply drag a toolbar by its handle and drop it in the desired location.

Alternatively, you can hide toolbars entirely.

#### Side panels

Most side panels can be rearranged using drag and drop. You can move them to different locations around the main window, combine them into tab groups, or hide them completely if you do not need them.

## Deleting rows vs. clearing cell contents

> Delete removes rows, while Backspace clears cell values.

When working in a data grid (viewing table data or query results), you can press the Delete key to delete all rows included in the current selection. Alternatively, press Backspace to clear the contents of the selected cells (that is, set their values to NULL).

## Group your databases

> Organize databases into virtual folders for easier navigation.

You can organize your databases into groups (virtual directories) in the database list. To manage groups, right-click anywhere in the list and use the group management options from the context menu.

Databases can be moved between groups using drag and drop.

When a group is deleted, all databases it contains are moved to the parent group. If the group has no parent, the databases are moved to the top level of the list.

## Change the order of columns with drag and drop

> Reorder table columns visually without writing SQL.

You can change the order of columns in a table by opening the Table Window (simply double-click the table) and using drag and drop in the *Structure* tab.

Alternatively, you can select a column and use the *Move Column Up* or *Move Column Down* buttons on the toolbar (blue icons with up/down arrows).

Once you commit the change, it will also be reflected in the Data tab.

## Using SQL code completion

> Let the editor suggest SQL syntax and database objects as you type.

When typing a query in the SQL Editor, the editor can assist you with SQL syntax as well as database object names (tables, columns, and so on). Code completion is triggered automatically in many situations. For example, when you type a table alias followed by a dot:

```sql
SELECT * FROM tab WHERE tab.
```

You can also trigger code completion manually by pressing Ctrl+Space. This is the default keyboard shortcut, but it can be changed in the configuration dialog.

## Finding the ROWID of a row

> Hover over a cell to inspect metadata, including ROWID when available.

When browsing table data (or SQL query results), hover the mouse pointer over a cell to display a tooltip containing all information that Letos knows about that cell. This includes column details and the row's ROWID.

If the tooltip does not contain a ROWID, it means that Letos was unable to determine it for that row. This can happen, for example, in SQL query results when a cell contains the result of an expression rather than data directly retrieved from a table.

## View or edit data in a dedicated editor

> Open images, XML, and other data types in specialized editors.

Letos can display images directly in the Grid View. However, depending on the size and type of the data, it may sometimes be more convenient to use a dedicated viewer or editor.

For images, XML documents, and other supported formats, you can either **switch to the Form View tab** or **right-click a cell and select "Open in Editor"**. This allows you to view and edit the data using tools tailored to its format, such as an image viewer or an editor with syntax highlighting.

## Execute the current query, selected code, or the entire editor contents

> Choose exactly how much SQL code should be executed.

By default, the SQL Editor executes only the query in which the cursor is currently placed. You can change this behavior in the configuration dialog and choose to always execute the entire contents of the SQL Editor.

Regardless of this setting, you can always select a portion of SQL code and press **Execute**. In that case, only the selected code will be executed.

## Setting a cell to an empty string, setting it to NULL, or deleting a row

> Backspace, Delete, and Enter each modify data in a different way.

- When a data cell is selected and you press **Backspace**, the cell value is set to **NULL**.
- When a data cell is selected and you press **Delete**, the entire row is marked for deletion (the row is not deleted immediately; the change must still be committed).
- When a data cell is selected, press **Enter** to start editing the cell. If you then remove its contents and confirm the edit, the cell value is set to an empty string.

## Opening tables referenced in an SQL query

> Open database objects directly from SQL code with Ctrl+Click.

When a query in the SQL Editor contains references to database objects such as tables, views, indexes, or triggers, hold **Ctrl** and those object names will become underlined. While holding **Ctrl**, click an object name to open it, just as if you had double-clicked it in the database list on the left.

You can also place the text cursor on an object name and press **F2** to open it. Depending on the object type, Letos will open the corresponding table, view, index, or trigger editor.

You can also right-click such an object name in the SQL Editor to display the same context menu that would appear if you right-clicked the object in the database list.

On macOS, use **Cmd** instead of **Ctrl**.

## Workarounds for stored procedures in SQLite

> Use custom functions and code snippets to reuse SQL logic.

SQLite does not support stored procedures, but Letos provides two features that can cover some similar use cases.

#### Custom SQL Functions

You can define your own SQL functions and use them directly in SQL queries. This is useful when you need reusable logic that can be called from many queries.

Custom SQL functions can be managed from their dedicated editor window. You can open it from the toolbar or from the **Tools** menu.

#### Code snippets

Code snippets let you save reusable pieces of SQL code and insert them quickly when writing queries. They are useful for common query templates, repeated statements, or larger SQL blocks that you do not want to type manually every time.

A code snippet can be inserted into the SQL editor in two ways:

* Drag and drop it from the snippets side panel into the editor.
* Invoke SQL code completion twice. The first invocation shows standard completion suggestions, while the second switches the assistant to code snippet mode.

Code snippets can be managed from their dedicated editor window, available from the toolbar and from the **Tools** menu.

## DEFAULT values and NULLs

> Make sure your default values are actually used

When defining a `DEFAULT` constraint, consider adding a `NOT NULL` constraint as well. This ensures that the default value is always inserted when you create a new row in Letos.

Without a `NOT NULL` constraint, Letos inserts `NULL` by default, even if a `DEFAULT` value is defined for the column.

If you prefer a different behavior, you can change it in the configuration dialog under **Data Browsing** settings. Enabling the option to always use default values causes Letos to insert the column's `DEFAULT` value whenever one is defined, instead of inserting `NULL`.

## Running multiple Letos instances

> Allow more than one copy of Letos to run simultaneously

By default, Letos prevents multiple instances of the application from running at the same time. This helps avoid accidentally opening the same databases in separate Letos processes.

If needed, you can change this behavior in the configuration dialog on the **General** page. Enable the option for multiple instances to allow several independent Letos windows to run simultaneously.

## Working with encrypted databases

> Open and create databases protected with encryption

Letos supports several encrypted SQLite database formats. To open or create an encrypted database, use the **Add Database** dialog, which provides access to advanced database connection settings.

Select **SQLite3 Multiple Ciphers** as the database type. You can then choose the encryption algorithm, enter the password, and configure any additional encryption parameters required by the database.

## Filtering data in Grid View

> Quickly find rows using text, patterns, or SQL expressions

Data displayed in tables and views can be filtered directly from the **Filter** field in the Grid View toolbar.

By default, a single filter field is used for all columns. If you need more precise control, you can enable per-column filters from the filter dropdown menu.

The same menu also lets you choose how filtering works. Depending on your needs, you can filter rows where a value:

* Contains the specified text
* Exactly matches the specified text
* Matches a regular expression

When using the single-filter mode, you can also filter data using an SQL expression. This allows you to create more advanced filtering conditions than simple text matching.

## Customize column width behavior

> Control how column widths are calculated and displayed

Letos provides several options for controlling column widths in data views. You can configure columns to automatically expand so that full column names are visible, preserve user-defined widths, and limit the maximum initial width assigned to columns.

These settings are available in **Configuration → Data Browsing → Data Column Width** and can help optimize the display of both narrow and wide datasets.

## Pin important columns

> Keep selected columns visible while scrolling horizontally

Columns in the Grid View can be pinned to the left side of the data grid. Pinned columns remain visible at all times and are excluded from horizontal scrolling, making it easier to work with wide tables.

To pin or unpin a column, right-click its header and use the corresponding option from the context menu.

## Reuse SQL code with snippets

> Insert frequently used SQL code without retyping it

Code snippets allow you to store reusable SQL fragments and insert them directly from the code assistant while editing queries.

You can assign a shortcut key to each snippet in the **Code Snippets Editor**. To use such a shortcut, invoke the code assistant and then invoke it again to switch it into snippet mode. Once in snippet mode, pressing the snippet's shortcut key will insert the corresponding code fragment.

Because these shortcuts are active only in snippet mode, they can be simple single-character keys without requiring modifiers such as **Ctrl**, **Cmd** or **Alt**.

## Recover previously executed queries

> Find and reuse SQL statements you've already executed

Looking for a query that you executed some time ago? Letos keeps a history of executed SQL statements, making it easy to find and reuse them later.

Open an **Editor Window** and switch to the **History** tab to browse previously executed queries. When you find the one you need, simply double-click it to copy it back to the **Query** tab, where you can review, modify, or execute it again.

## Review schema changes performed by Letos

> See exactly how complex schema modifications were executed

Letos can perform advanced schema modifications that involve rebuilding tables and updating dependent objects such as views, indexes, triggers, and other schema elements. Many of these operations happen automatically behind the scenes.

If you want to review or reproduce the exact steps that Letos performed, open the **DDL History** window. It contains the SQL statements generated and executed by Letos during schema modification operations, allowing you to inspect, reuse, or apply them to another database with a compatible schema.

## Open databases your way

> Open databases from files, menus, drag & drop, or the command line

Letos offers several ways to open or create a database.

You can:
- use the toolbar,
- use the main menu,
- use the context menu available when right-clicking in the database list,
- drag and drop a database file onto the Letos window to open it,
- pass the path to a database file as a command-line argument when starting Letos.

## Trigger code completion manually

> Press a shortcut whenever you need SQL suggestions

In the SQL Editor, you can manually invoke SQL code completion at any time. By default, press **Ctrl+Space** (**Cmd+Space** on macOS) to display suggestions for SQL keywords, tables, columns, and other database objects relevant to the current context.

The keyboard shortcut used for code completion can be customized in the configuration dialog.

## Complete column names automatically

> Type a table name and a dot to see its columns

When writing SQL queries, enter a table name (or table alias) followed by a dot, for example:

```sql
SELECT * FROM table_name.
```

Letos will automatically display a list of columns available in that table, allowing you to select the desired column without typing its full name.

## Let the editor analyze your SQL

> Spot syntax errors and identify database objects at a glance

The SQL Editor continuously analyzes your SQL code as you type. Syntax errors are highlighted to help you find problems before executing a query.

The editor also recognizes database objects such as tables, views, columns, indexes, and triggers, and marks them visually to improve readability and navigation.

## Choose where query results are displayed

> Show query results below, beside, or separate from the editor

You can configure how query results are displayed in the SQL Editor. Results can appear below the editor, to its right, or in a separate tab, depending on your preferred workflow and screen layout.

Use the query results layout selector in the SQL Editor toolbar to switch between these modes at any time.

## Control when changes are committed

> Review changes before saving them to the database

Changes made in data views are not committed automatically. Use the **Commit** and **Rollback** actions from the toolbar to either save or discard pending modifications.

The SQL Editor can also be configured to disable automatic commits for SQL statements such as `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `DROP`, and `ALTER`. This option is available from the SQL Editor's quick settings dropdown in the toolbar.

Manual transaction control for SQL queries requires the database to use the `WAL` journaling mode. Data views support manual commit and rollback regardless of the journaling mode currently in use.

If the database is not already using `WAL`, Letos will explain the implications and ask for confirmation before enabling manual commits for SQL queries.

## Commit or rollback selected cells only

> Apply changes selectively instead of affecting the entire row

When editing data in a Grid View, you do not have to commit or roll back all pending changes at once. You can commit or roll back only the selected cells using the context menu.

This makes it easy to keep some modifications while discarding or saving others, even within the same row.

## Explore built-in SQL functions

> Use additional SQL functions beyond those provided by SQLite

Letos provides a collection of built-in SQL functions, including `regexp()`, `md5()`, `base64_encode()`, and many others.

To discover available functions, invoke the code assistant with **Ctrl+Space** (**Cmd+Space** on macOS).

## Copy and move objects between databases

> Transfer tables and other database objects with drag and drop

You can drag objects between databases to copy or move them.

Tables can be transferred with or without their data, and many other object types are supported as well, including views, indexes, and triggers. Simply drag an object to another database and Letos will ask whether you want to copy or move it.

## Query multiple databases at once

> Use data from several databases in a single query

Letos allows you to query multiple databases transparently from the same SQL Editor. When writing queries, you can refer to databases by the names displayed in the database list.

This makes it easy to join, compare, and analyze data stored across multiple databases without manually attaching them in SQL.

## Create your own SQL functions

> Extend SQLite with functions written in your favorite language

Letos allows you to create custom SQL functions and use them directly in your queries. Scalar functions, aggregate functions, and window aggregate functions are all supported.

Functions can be implemented in JavaScript, Tcl, or Python. Additional programming languages may become available in the future through plugins.

Custom SQL functions can be managed from the dedicated **SQL Functions Editor**.

Export data in many formats

Save query results and table data in the format you need

Letos can export data to a wide range of formats, including CSV, SQL, HTML, XML, JSON, and many others.

You can start an export from the main toolbar, the Tools menu, or by using the export shortcut (Ctrl+Shift+E by default). Dedicated export actions are also available from the toolbars of the SQL Editor, Table Window, and View Window.

## Removing a database is safe

> Removing a database from Letos does not delete its file

When you remove a database from the database list, Letos only removes the connection entry from its configuration.

The database file itself remains untouched on disk.

## Explore the SQL Editor toolbar

> Many frequently used SQL tools are just one click away

The SQL Editor toolbar provides quick access to many commonly used features, including query execution, query plan analysis, SQL formatting, data export, and saving or loading SQL scripts.

Hover over toolbar buttons to see tooltips describing their purpose and available keyboard shortcuts.

## Customize keyboard shortcuts

> Change shortcuts to match your preferences

Most keyboard shortcuts in Letos can be customized from the **Configuration** dialog.

If a shortcut conflicts with another application, your operating system, or simply does not fit your workflow, you can assign a different key combination to it.

## Add columns quickly in the Table Window

> There is more than one way to add a new column

In the **Table Window**, you can add a column in several ways:

* Click the **Add Column** button on the toolbar.
* Double-click an empty area in the column list.
* Press **Insert** while the column list has focus.

## Display images directly in data grids

> Letos can automatically render image data stored in tables

By default, columns declared with the types `IMG`, `IMAGE`, `PIC`, and `PICTURE` are rendered as images in Grid View instead of displaying their raw values.

You can customize which column types should be treated as images in the **Configuration** dialog.

Image rendering can also be enabled or disabled for individual columns on demand. Right-click a column header in Grid View and use the appropriate option from the context menu.

## Why are some constraints listed separately?

> SQLite distinguishes between column constraints and table constraints

The **Table Window** is divided into two sections because SQLite supports two different levels of constraints.

The upper section contains columns and their associated constraints, such as `NOT NULL`, `DEFAULT`, `CHECK`, or `PRIMARY KEY` defined for a specific column.

The lower section contains table-level constraints. These constraints apply to the table as a whole rather than to a single column. Common examples include composite primary keys, composite unique constraints, and foreign keys that involve multiple columns.

This separation reflects how constraints are defined in SQLite and helps distinguish rules that belong to individual columns from those that affect the entire table.

## Open tables directly on the Data tab

> Skip the structure view and start browsing data immediately

By default, a newly opened **Table Window** displays the **Structure** tab first.

If you primarily work with data rather than table definitions, you can configure Letos to open table windows directly on the **Data** tab. You can also reverse the tab order, making **Data** the first tab and **Structure** the second.

These options are available in the **Configuration** dialog.

## Debug SQL code with `debug()`

> Print diagnostic messages directly from SQL code

Letos provides the built-in SQL function `debug(msg)`, which can be useful when troubleshooting complex SQL logic.

A common use case is temporarily adding `debug()` calls to a trigger body to verify that the trigger is executed and to inspect intermediate values while debugging. The function can also be used from other SQL statements whenever you need simple diagnostic output.

Remember to remove `debug()` calls once debugging is complete. The function is provided by Letos, not by SQLite itself. Other applications using the same database may not define this function at all, causing errors, or they may define a function with the same name but different behavior, potentially leading to unexpected side effects.

## Preview drag and drop actions

> See what will happen before dropping files into Letos

When you drag one or more files over the Letos window, the application displays a hint describing the action that will be performed if the files are dropped.

Depending on the file type, Letos may offer to open a database, start a data import, open an SQL script in the SQL Editor, or perform another appropriate action.

This allows you to verify the intended operation before releasing the mouse button.

## Generate SQL with drag and drop

> Build `SELECT` and `UPDATE` statements without typing them manually

The database list supports several drag-and-drop shortcuts that can generate SQL code directly in the SQL Editor.

* **Ctrl+Drag** a table or view into the SQL Editor to generate a `SELECT` statement.
* **Ctrl+Drag** selected columns into the SQL Editor to generate a `SELECT` statement containing only those columns.
* **Ctrl+Shift+Drag** a table into the SQL Editor to generate an `UPDATE` statement.
* **Ctrl+Shift+Drag** selected columns into the SQL Editor to generate an `UPDATE` statement containing only those columns.
* Drag selected columns without any modifier keys to insert their names as a comma-separated list.

These actions are also available from the context menu in the database list, making them easier to discover and use.

On macOS, use **Cmd** instead of **Ctrl**.

## Speed up work in the database list

> Useful shortcuts for opening, renaming, and managing databases

The database list supports several shortcuts that can help you work more efficiently.

* Double-click a closed database to connect to it.
* Double-click an open database to open its properties.
* Press **Ctrl+Enter** to open properties of the selected database.
* Press **F2** (by default) to rename the selected item directly in the list.
* Middle-click a database to disconnect from it.

These shortcuts can help reduce the need for context menus and toolbar actions when managing databases and database objects.

On macOS, use **Cmd+Enter** instead of **Ctrl+Enter**.

## Edit cell values in two ways

> Choose between quick inline editing and a dedicated editor

When working in a Grid View, you can edit cell contents using either inline editing or a dedicated editor dialog.

* Press **F2** to edit the selected cell directly in the grid.
* Press **F4** to open the selected value in the dedicated editor window, which provides specialized editors for many data types and is often more convenient for larger values.
* Press **Enter** to start editing using the method that Letos considers most appropriate for the selected value.


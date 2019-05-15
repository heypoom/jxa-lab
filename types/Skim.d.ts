
export namespace Skim {
    // Default Application
 export interface Application {}
    // Class
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * The application's top level scripting object.
  */
 export interface Application {
   /**
    * The name of the application.
    */
   name(): string;
   /**
    * Is this the active application?
    */
   frontmost(): boolean;
   /**
    * The version number of the application.
    */
   version(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A document.
  */
 export interface Document {
   /**
    * Its name.
    */
   name(): string;
   /**
    * Has it been modified since the last save?
    */
   modified(): boolean;
   /**
    * Its location on disk, if it has one.
    */
   file(): any;
   /**
    * The document's path.
    */
   path(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A window.
  */
 export interface Window {
   /**
    * The title of the window.
    */
   name(): string;
   /**
    * The unique identifier of the window.
    */
   id(): number;
   /**
    * The index of the window, ordered front to back.
    */
   index(): number;
   /**
    * The bounding rectangle of the window.
    */
   bounds(): any;
   /**
    * Does the window have a close button?
    */
   closeable(): boolean;
   /**
    * Does the window have a minimize button?
    */
   miniaturizable(): boolean;
   /**
    * Is the window minimized right now?
    */
   miniaturized(): boolean;
   /**
    * Can the window be resized?
    */
   resizable(): boolean;
   /**
    * Is the window visible right now?
    */
   visible(): boolean;
   /**
    * Does the window have a zoom button?
    */
   zoomable(): boolean;
   /**
    * Is the window zoomed right now?
    */
   zoomed(): boolean;
   /**
    * The document whose contents are displayed in the window.
    */
   document(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Rich (styled) text
  */
 export interface RichText {
   /**
    * The color of the first character.
    */
   color(): any;
   /**
    * The name of the font of the first character.
    */
   font(): string;
   /**
    * The size in points of the first character.
    */
   size(): number;
   /**
    * The raw RTF data.
    */
   RTF(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * This subdivides the text into characters.
  */
 export interface Character {
   /**
    * The color of the first character.
    */
   color(): any;
   /**
    * The name of the font of the first character.
    */
   font(): string;
   /**
    * The size in points of the first character.
    */
   size(): number;
   /**
    * The raw RTF data.
    */
   RTF(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * This subdivides the text into paragraphs.
  */
 export interface Paragraph {
   /**
    * The color of the first character.
    */
   color(): any;
   /**
    * The name of the font of the first character.
    */
   font(): string;
   /**
    * The size in points of the first character.
    */
   size(): number;
   /**
    * The raw RTF data.
    */
   RTF(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * This subdivides the text into words.
  */
 export interface Word {
   /**
    * The color of the first character.
    */
   color(): any;
   /**
    * The name of the font of the first character.
    */
   font(): string;
   /**
    * The size in points of the first character.
    */
   size(): number;
   /**
    * The raw RTF data.
    */
   RTF(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * This subdivides the text into chunks that all have the same attributes.
  */
 export interface AttributeRun {
   /**
    * The color of the first character.
    */
   color(): any;
   /**
    * The name of the font of the first character.
    */
   font(): string;
   /**
    * The size in points of the first character.
    */
   size(): number;
   /**
    * The raw RTF data.
    */
   RTF(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Represents an inline text attachment. This class is used mainly for make commands.
  */
 export interface Attachment {
   /**
    * The path to the file for the attachment
    */
   fileName(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Rich text format, encoding rich text.
  */
 export interface RichTextFormat {
   /**
    * The name for the rich text format.
    */
   name(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A page.
  */
 export interface Page {
   /**
    * The index of the page.
    */
   index(): number;
   /**
    * The label of the page.
    */
   label(): string;
   /**
    * The bounding rectangle for the crop box of the page (left, top, right, bottom).
    */
   bounds(): any;
   /**
    * The bounding rectangle for the media box of the page (left, top, right, bottom).
    */
   mediaBounds(): any;
   /**
    * The bounding rectangle for the foreground of the page (left, top, right, bottom).
    */
   contentBounds(): any;
   /**
    * The bounding rectangles for the lines on the page (left, top, right, bottom).
    */
   lineBounds(): any;
   /**
    * The rotation of the page. Must be one of 0, 90, 180, or 270.
    */
   rotation(): number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A note.
  */
 export interface Note {
   /**
    * Unique ID of the note.
    */
   id(): string;
   /**
    * The type of note.
    */
   type(): any;
   /**
    * The text of the note. Attributes are ignored.
    */
   text(): any;
   /**
    * The color of the note. Can be given as a list of (red, green, blue, alpha), a standard color (e.g. red), or a default color (e.g. text note color).
    */
   color(): any;
   /**
    * The page for the note.
    */
   page(): any;
   /**
    * The bounding rectangle of the note (left, top, right, bottom).
    */
   bounds(): any;
   /**
    * The modification date of a note.
    */
   modificationDate(): any;
   /**
    * The user name of the creator of a note.
    */
   userName(): string;
   /**
    * The font name of a text note.
    */
   fontName(): string;
   /**
    * The font size in points of a text note.
    */
   fontSize(): number;
   /**
    * The text alignment of a text note.
    */
   alignment(): any;
   /**
    * The text color of a text note.
    */
   fontColor(): any;
   /**
    * The rich extended text of an anchored note.
    */
   extendedText(): any;
   /**
    * The icon type of an anchored note.
    */
   icon(): any;
   /**
    * The fill color of a circle, box, or line.
    */
   interiorColor(): any;
   /**
    * The line width of the note.
    */
   lineWidth(): any;
   /**
    * The line style of the note.
    */
   lineStyle(): any;
   /**
    * The dash pattern of the border of the note or of the line, a list of numbers.
    */
   dashPattern(): any;
   /**
    * The start point of a line (left, top).
    */
   startPoint(): any;
   /**
    * The end point of a line (left, top).
    */
   endPoint(): any;
   /**
    * The start line style of a line.
    */
   startLineStyle(): any;
   /**
    * The end line style of a line.
    */
   endLineStyle(): any;
   /**
    * The list of paths for a freehand or markup note.
    */
   pathList(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A bookmark.
  */
 export interface Bookmark {
   /**
    * The entire contents of the bookmark, including the contents of its children
    */
   entireContents(): any;
   /**
    * The name for the bookmark.
    */
   name(): string;
   /**
    * The bookmark type.
    */
   type(): any;
   /**
    * The page index for the bookmark.
    */
   pageIndex(): number;
   /**
    * The folder or session bookmark containing this bookmark.
    */
   container(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A download.
  */
 export interface Download {
   /**
    * The target file for the download.
    */
   file(): any;
   /**
    * The current status of the download. Set this to cancel or resume a download.
    */
   status(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A list of points.
  */
 export interface PointList {}
    
    // CLass Extension
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Skim's top level scripting object.
  */
 export interface Application {
   /**
    * The default PDF view settings for normal mode.
    */
   defaultViewSettings(): any;
   /**
    * The default PDF view settings for full screen mode. An empty dictionary indicates that default view settings for normal mode are used.
    */
   defaultFullScreenViewSettings(): any;
   /**
    * The default background color in normal mode.
    */
   backgroundColor(): any;
   /**
    * The default background color in full screen mode.
    */
   fullScreenBackgroundColor(): any;
   /**
    * The default page background color.
    */
   pageBackgroundColor(): any;
   /**
    * The default colors used for new notes.
    */
   defaultNoteColors(): any;
   /**
    * The default line width used for new notes.
    */
   defaultNoteLineWidths(): any;
   /**
    * The default line styles used for new notes.
    */
   defaultNoteLineStyles(): any;
   /**
    * The default dash patterns used for new notes.
    */
   defaultNoteDashPatterns(): any;
   /**
    * The default start line style used for new lines.
    */
   defaultNoteStartLineStyle(): any;
   /**
    * The default end line style used for new lines.
    */
   defaultNoteEndLineStyle(): any;
   /**
    * The default font names used for new notes.
    */
   defaultNoteFontNames(): any;
   /**
    * The default font sizes used for new notes.
    */
   defaultNoteFontSizes(): any;
   /**
    * The default font color used for new text notes.
    */
   defaultTextNoteFontColor(): any;
   /**
    * The default alignment used for new text notes.
    */
   defaultTextNoteAlignment(): any;
   /**
    * The default icon type used for new anchored notes.
    */
   defaultNoteIconType(): any;
   /**
    * List of favorite colors.
    */
   favoriteColors(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A Skim document.
  */
 export interface Document {
   /**
    * The current page.
    */
   currentPage(): any;
   /**
    * The currently selected note.
    */
   activeNote(): any;
   /**
    * The selection of the document.
    */
   selection(): any;
   /**
    * The bounds of the selection from the selection tool of the document (left, top, right, bottom).
    */
   selectionBounds(): any;
   /**
    * The page for the selection from the selection tool of the document.
    */
   selectionPage(): any;
   /**
    * The selection in the note table.
    */
   noteSelection(): any;
   /**
    * The PDF view settings.
    */
   viewSettings(): any;
   /**
    * The attributes of the PDF document.
    */
   info(): any;
   /**
    * The tool mode for the document.
    */
   tool(): any;
   /**
    * The interaction mode for the document.
    */
   interactionMode(): any;
   /**
    * Is this a PDF document?
    */
   containingPDF(): boolean;
   /**
    * A document containing notes for a presentation that is synchronized.
    */
   presentationNotesDocument(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A window.
  */
 export interface Window {}
    
    // Records
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 export interface PrintSettings {
   /**
    * the number of copies of a document to be printed
    */
   copies(): number;
   /**
    * Should printed copies be collated?
    */
   collating(): boolean;
   /**
    * the first page of the document to be printed
    */
   startingPage(): number;
   /**
    * the last page of the document to be printed
    */
   endingPage(): number;
   /**
    * number of logical pages laid across a physical page
    */
   pagesAcross(): number;
   /**
    * number of logical pages laid out down a physical page
    */
   pagesDown(): number;
   /**
    * the time at which the desktop printer should print the document
    */
   requestedPrintTime(): any;
   /**
    * how errors are handled
    */
   errorHandling(): any;
   /**
    * for fax number
    */
   faxNumber(): string;
   /**
    * for target printer
    */
   targetPrinter(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 export interface PDFViewSettings {
   /**
    * The scale factor of the PDF.
    */
   scaleFactor(): any;
   /**
    * Does the PDF zoom automatically?
    */
   autoScales(): boolean;
   /**
    * The display mode for the PDF.
    */
   displayMode(): any;
   /**
    * Does the PDF display page breaks?
    */
   displaysPageBreaks(): boolean;
   /**
    * Is the first page in two-up displayed as in book mode?
    */
   displaysAsBook(): boolean;
   /**
    * The display box for the PDF.
    */
   displayBox(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 export interface DocumentAttributes {
   /**
    * The file name.
    */
   fileName(): string;
   /**
    * The title.
    */
   title(): string;
   /**
    * The author.
    */
   author(): string;
   /**
    * The subject.
    */
   subject(): string;
   /**
    * The creator.
    */
   creator(): string;
   /**
    * The producer.
    */
   producer(): string;
   /**
    * The version.
    */
   version(): string;
   /**
    * The creation date.
    */
   creationDate(): any;
   /**
    * The modification date.
    */
   modificationDate(): any;
   /**
    * The number of pages.
    */
   pageCount(): number;
   /**
    * The size of the file.
    */
   fileSize(): string;
   /**
    * The physical size of the file.
    */
   physicalSize(): any;
   /**
    * The logical size of the file.
    */
   logicalSize(): any;
   /**
    * The size of a page.
    */
   pageSize(): string;
   /**
    * The list of keywords.
    */
   keywords(): any;
   /**
    * The keywords as a string.
    */
   keywordsString(): string;
   /**
    * Whether the document is encrypted.
    */
   encrypted(): boolean;
   /**
    * Whether the document allows printing.
    */
   allowsPrinting(): boolean;
   /**
    * Whether the document allows copying.
    */
   allowsCopying(): boolean;
   /**
    * Whether the document allows adding notes.
    */
   allowsNotes(): boolean;
   /**
    * Open Meta tags.
    */
   tags(): any;
   /**
    * Open Meta rating.
    */
   rating(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 export interface NoteColors {
   /**
    * Default text note color.
    */
   textNoteColor(): any;
   /**
    * Default anchored note color.
    */
   anchoredNoteColor(): any;
   /**
    * Default circle color.
    */
   circleNoteColor(): any;
   /**
    * Default box color.
    */
   boxNoteColor(): any;
   /**
    * Default highlight color.
    */
   highlightNoteColor(): any;
   /**
    * Default underline highlight color.
    */
   underlineNoteColor(): any;
   /**
    * Default strike out highlight color.
    */
   strikeOutNoteColor(): any;
   /**
    * Default line color.
    */
   lineNoteColor(): any;
   /**
    * Default freehand color.
    */
   freehandNoteColor(): any;
   /**
    * Default circle fill color.
    */
   circleNoteInteriorColor(): any;
   /**
    * Default box fill color.
    */
   boxNoteInteriorColor(): any;
   /**
    * Default line fill color.
    */
   lineNoteInteriorColor(): any;
   /**
    * Default text note font color.
    */
   textNoteFontColor(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 export interface NoteLineWidths {
   /**
    * Default text note line width.
    */
   textNoteLineWidth(): any;
   /**
    * Default circle line width.
    */
   circleNoteLineWidth(): any;
   /**
    * Default box line width.
    */
   boxNoteLineWidth(): any;
   /**
    * Default line line width.
    */
   lineNoteLineWidth(): any;
   /**
    * Default freehand line width.
    */
   freehandNoteLineWidth(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 export interface NoteLineStyles {
   /**
    * Default text note line width.
    */
   textNoteLineStyle(): any;
   /**
    * Default circle line width.
    */
   circleNoteLineStyle(): any;
   /**
    * Default box line width.
    */
   boxNoteLineStyle(): any;
   /**
    * Default line line width.
    */
   lineNoteLineStyle(): any;
   /**
    * Default freehand line width.
    */
   freehandNoteLineStyle(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 export interface NoteDashPatterns {
   /**
    * Default text note dash pattern.
    */
   textNoteDashPattern(): any;
   /**
    * Default circle dash pattern.
    */
   circleNoteDashPattern(): any;
   /**
    * Default box dash pattern.
    */
   boxNoteDashPattern(): any;
   /**
    * Default line dash pattern.
    */
   lineNoteDashPattern(): any;
   /**
    * Default freehand dash pattern.
    */
   freehandNoteDashPattern(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 export interface NoteFontNames {
   /**
    * Default text note font name.
    */
   textNoteFontName(): string;
   /**
    * Default anchored note font name.
    */
   anchoredNoteFontName(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 export interface NoteFontSizes {
   /**
    * Default text note font size.
    */
   textNoteFontSize(): number;
   /**
    * Default anchored note font size.
    */
   anchoredNoteFontSize(): number;
 }

    // Function options

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CloseOptionalParameter {
      /**
       * Should changes be saved before closing?
       */
      saving?: any;
      /**
       * The file in which to save the document, if so.
       */
      savingIn?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SaveOptionalParameter {
      /**
       * The file in which to save the document.
       */
      in?: any;
      /**
       * The file format to use. Should be one of "PDF", "PDF Bundle", "PDF Without Notes", "PDF With Embedded Notes", "PostScript", "PostScript Without Notes", "Encapsulated PostScript", "Encapsulated PostScript Without Notes", "DVI", "DVI Without Notes", "XDV", "XDV Without Notes", "Skim Notes", "Notes as Text", "Notes as RTF", "Notes as RTFD", and "Notes as FDF", or the name of a custom export template.
       */
      as?: string;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface PrintOptionalParameter {
      /**
       * The print settings to use.
       */
      withProperties?: any;
      /**
       * Should the application show the print dialog?
       */
      printDialog?: boolean;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface QuitOptionalParameter {
      /**
       * Should changes be saved before quitting?
       */
      saving?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CountOptionalParameter {
      /**
       * The class of objects to be counted.
       */
      each?: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface DuplicateOptionalParameter {
      /**
       * The location for the new copy or copies.
       */
      to?: any;
      /**
       * Properties to set in the new copy or copies right away.
       */
      withProperties?: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MakeOptionalParameter {
      /**
       * The class of the new object.
       */
      new: any;
      /**
       * The location at which to insert the object.
       */
      at?: any;
      /**
       * The initial contents of the object.
       */
      withData?: any;
      /**
       * The initial values for properties of the object.
       */
      withProperties?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MoveOptionalParameter {
      /**
       * The new location for the object(s).
       */
      to: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SelectOptionalParameter {
      /**
       * Animate when selecting?
       */
      animating?: boolean;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface GoOptionalParameter {
      /**
       * The page, note, TeX line, or selection to go to.
       */
      to: any;
      /**
       * The TeX source file. By default this is derived from the file. Only applies for a TeX line.
       */
      from?: any;
      /**
       * Whether to move the reading bar instead of selecting. Only applies for a TeX line.
       */
      showingReadingBar?: boolean;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ConvertNotesOptionalParameter {
      /**
       * Whether to wait for the conversion to finish. Default is true
       */
      waiting?: boolean;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ReadNotesOptionalParameter {
      /**
       * The file from which to read the notes.
       */
      from: any;
      /**
       * Whether to replace the currently existing notes. Default is true.
       */
      replacing?: boolean;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface FindOptionalParameter {
      /**
       * The text to search for.
       */
      text: string;
      /**
       * The selection to search from.
       */
      from?: any;
      /**
       * Search backward?
       */
      backwardSearch?: boolean;
      /**
       * Is the search case sensitive?
       */
      caseSensitiveSearch?: boolean;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface JoinOptionalParameter {
      /**
       * The selection to add.
       */
      to?: any;
      /**
       * Join to a continuous selection?
       */
      continuousSelection?: boolean;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ShowTeXFileOptionalParameter {
      /**
       * The point from the page to show the TeX line for.
       */
      from?: any;
      /**
       * The page to show the TeX line for.
       */
      at?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface GetBoundsForOptionalParameter {
      /**
       * The page on which to get the bounds.
       */
      on?: any;
      /**
       * The display box for which to take the bounds.
       */
      for?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface GetTextForOptionalParameter {
      /**
       * The page on which to get the text.
       */
      on?: any;
      /**
       * The type of object to return, rich text or a text type. The default is rich text.
       */
      as?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface GetIndexForOptionalParameter {
      /**
       * The page on which to get the index.
       */
      on?: any;
      /**
       * Gets the index of the last character of a selection.
       */
      last?: boolean;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface GetSelectionForOptionalParameter {
      /**
       * The end point for the selection.
       */
      to?: any;
      /**
       * The page for the selection, defaults to the (current page of) the closest tell block.
       */
      on?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface GrabOptionalParameter {
      /**
       * The bounds for the picture.
       */
      for?: any;
      /**
       * Whether to return TIFF data. By default returns PDF data.
       */
      TIFFFormat?: boolean;
      /**
       * The type of data to return. Currently 'PDF' and 'TIFF picture' are supported. Defaults to PDF.
       */
      as?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface FormatOptionalParameter {
      /**
       * The template to use as a file, text, or rich text.
       */
      usingTemplate: any;
      /**
       * The file to write the resulting text to.
       */
      to?: any;
    }


}
export interface Skim extends Skim.Application {
    // Functions

     /**
      * Open a document.
      * @param directParameter The file(s) to be opened.
      * @return The opened document(s).
      */
     open(directParameter: {}, ): void;

     /**
      * Close a document.
      * @param directParameter the document(s) or window(s) to close.
      * @param option
      * 
      */
     close(directParameter: any, option?: Skim.CloseOptionalParameter): void;

     /**
      * Save a document.
      * @param directParameter The document(s) or window(s) to save.
      * @param option
      * 
      */
     save(directParameter: any, option?: Skim.SaveOptionalParameter): void;

     /**
      * Print a document.
      * @param directParameter The file(s), document(s), or window(s) to be printed.
      * @param option
      * 
      */
     print(directParameter: {}, option?: Skim.PrintOptionalParameter): void;

     /**
      * Quit the application.

      * @param option
      * 
      */
     quit(option?: Skim.QuitOptionalParameter): void;

     /**
      * Return the number of elements of a particular class within an object.
      * @param directParameter The objects to be counted.
      * @param option
      * @return The count.
      */
     count(directParameter: any, option?: Skim.CountOptionalParameter): number;

     /**
      * Delete an object.
      * @param directParameter The object(s) to delete.
      * 
      */
     delete(directParameter: any, ): void;

     /**
      * Copy an object.
      * @param directParameter The object(s) to copy.
      * @param option
      * 
      */
     duplicate(directParameter: any, option?: Skim.DuplicateOptionalParameter): void;

     /**
      * Verify that an object exists.
      * @param directParameter The object(s) to check.
      * @return Did the object(s) exist?
      */
     exists(directParameter: any, ): boolean;

     /**
      * Create a new object.

      * @param option
      * @return The new object.
      */
     make(option?: Skim.MakeOptionalParameter): any;

     /**
      * Move an object to a new location.
      * @param directParameter The object(s) to move.
      * @param option
      * 
      */
     move(directParameter: any, option?: Skim.MoveOptionalParameter): void;

     /**
      * Revert a document. Don't use this when you have turned on the auto-relead functionality.
      * @param directParameter The document(s) or window(s) to revert.
      * 
      */
     revert(directParameter: any, ): void;

     /**
      * Select text or notes in a document.
      * @param directParameter The character range(s) or note(s) to select.
      * @param option
      * 
      */
     select(directParameter: {}, option?: Skim.SelectOptionalParameter): void;

     /**
      * Go to a location.
      * @param directParameter The document in which to scroll.
      * @param option
      * 
      */
     go(directParameter: Skim.Document, option?: Skim.GoOptionalParameter): void;

     /**
      * Convert in a document PDF annotations to Skim notes.
      * @param directParameter The document(s) for which to convert notes.
      * @param option
      * 
      */
     convertNotes(directParameter: Skim.Document, option?: Skim.ConvertNotesOptionalParameter): void;

     /**
      * Read notes from a Skim document and ad them to the PDF document.
      * @param directParameter The document(s) for which to read notes.
      * @param option
      * 
      */
     readNotes(directParameter: Skim.Document, option?: Skim.ReadNotesOptionalParameter): void;

     /**
      * Find text in a document.
      * @param directParameter The document in which to search.
      * @param option
      * @return Selection for the found text as a list of character ranges.
      */
     find(directParameter: Skim.Document, option?: Skim.FindOptionalParameter): void;

     /**
      * Join selection(s).
      * @param directParameter The selection to add to.
      * @param option
      * @return The joined selection.
      */
     join(directParameter: {}, option?: Skim.JoinOptionalParameter): void;

     /**
      * Show the LaTeX source file.
      * @param directParameter The document to show the TeX source for.
      * @param option
      * 
      */
     showTeXFile(directParameter: Skim.Document, option?: Skim.ShowTeXFileOptionalParameter): void;

     /**
      * Get the bounds of a page, note, or selection.
      * @param directParameter The document, page, note, or selection.
      * @param option
      * @return The bounds of the object.
      */
     getBoundsFor(directParameter: {}, option?: Skim.GetBoundsForOptionalParameter): any;

     /**
      * Get the text of a document, page, note, selection, or raw RTF data.
      * @param directParameter The document, page, note, selection, or raw RTF data.
      * @param option
      * @return The (rich) text of the object.
      */
     getTextFor(directParameter: {}, option?: Skim.GetTextForOptionalParameter): void;

     /**
      * Get the index of a document, page, note, or selection.
      * @param directParameter The document, page, note, or selection.
      * @param option
      * @return The index for the object. Returns 0 if no index was found.
      */
     getIndexFor(directParameter: {}, option?: Skim.GetIndexForOptionalParameter): number;

     /**
      * Get the pages of a document, page, note, or selection.
      * @param directParameter The document, page, note, or selection.
      * @return The list of pages for the object.
      */
     getPagesFor(directParameter: {}, ): void;

     /**
      * Get the selection inside a rectangle or between two points.
      * @param directParameter The rectangle or start point for the selection.
      * @param option
      * @return The resulting selection.
      */
     getSelectionFor(directParameter: {}, option?: Skim.GetSelectionForOptionalParameter): void;

     /**
      * Grab a picture from a page.
      * @param directParameter The page for the picture.
      * @param option
      * @return The PDF or TIFF data of the picture.
      */
     grab(directParameter: Skim.Page, option?: Skim.GrabOptionalParameter): any;

     /**
      * Format an object using a template.
      * @param directParameter The object to format using a template.
      * @param option
      * @return The text or rich text generated using the template.
      */
     format(directParameter: {}, option?: Skim.FormatOptionalParameter): void;

     /**
      * Edit a note.
      * @param directParameter The note to edit.
      * 
      */
     edit(directParameter: Skim.Note, ): void;
}
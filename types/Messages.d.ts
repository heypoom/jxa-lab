
export namespace Messages {
    // Default Application
 export interface Application {}
    // Class
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A scriptable object.
  */
 export interface Item {
   /**
    * The class of the object.
    */
   class(): any;
   /**
    * All of the object's properties.
    */
   properties(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * The application's top-level scripting object.
  */
 export interface Application {
   /**
    * The name of the application.
    */
   name(): string;
   /**
    * Is this the frontmost (active) application?
    */
   frontmost(): boolean;
   /**
    * The version of the application.
    */
   version(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A color.
  */
 export interface Color {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An Messages document.
  */
 export interface Document {
   /**
    * The document's name.
    */
   name(): string;
   /**
    * Has the document been modified since the last save?
    */
   modified(): boolean;
   /**
    * The document's location on disk.
    */
   file(): any;
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
    * The full title of the window.
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
    * Whether the window has a close box.
    */
   closeable(): boolean;
   /**
    * Whether the window can be minimized.
    */
   minimizable(): boolean;
   /**
    * Whether the window is currently minimized.
    */
   minimized(): boolean;
   /**
    * Whether the window can be resized.
    */
   resizable(): boolean;
   /**
    * Whether the window is currently visible.
    */
   visible(): boolean;
   /**
    * Whether the window can be zoomed.
    */
   zoomable(): boolean;
   /**
    * Whether the window is currently zoomed.
    */
   zoomed(): boolean;
   /**
    * The document whose contents are being displayed in the window.
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
   size(): any;
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
   file(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Messages application.
  */
 export interface Application {
   /**
    * Time in seconds that I have been idle.
    */
   idleTime(): number;
   /**
    * My image as it appears in all services.
    */
   image(): any;
   /**
    * My status on all services.
    */
   status(): any;
   /**
    * My status message, visible to other people while I am online.
    */
   statusMessage(): string;
   /**
    * The currently active audio or video chat.
    */
   activeAvChat(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A buddy on a service.
  */
 export interface Buddy {
   /**
    * The buddy's service and handle. For example: AIM:JohnDoe007
    */
   id(): string;
   /**
    * The service on which this buddy exists.
    */
   service(): any;
   /**
    * The buddy's name as it appears in the buddy list.
    */
   name(): string;
   /**
    * The buddy's online account name.
    */
   handle(): string;
   /**
    * The buddy's current status.
    */
   status(): any;
   /**
    * The buddy's current status message.
    */
   statusMessage(): string;
   /**
    * The time in seconds the buddy has been idle.
    */
   idleTime(): number;
   /**
    * The buddy's messaging capabilities.
    */
   capabilities(): any;
   /**
    * The buddy's custom image.
    */
   image(): any;
   scriptAccountLegacyName(): string;
   /**
    * The first name from this buddy's Contacts card, if available
    */
   firstName(): string;
   /**
    * The last name from this buddy's Contacts card, if available
    */
   lastName(): string;
   /**
    * The full name from this buddy's Contacts card, if available
    */
   fullName(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A service that can be logged in from this system
  */
 export interface Service {
   /**
    * A guid identifier for this service.
    */
   id(): string;
   /**
    * The name of this service as defined in Account preferences description field
    */
   name(): string;
   /**
    * My image as it appears in all services.
    */
   image(): any;
   /**
    * Is the service enabled?
    */
   enabled(): boolean;
   /**
    * The connection status for this account.
    */
   connectionStatus(): any;
   /**
    * My status on this service.
    */
   status(): any;
   /**
    * My status message, visible to other people on this service while I am online.
    */
   statusMessage(): string;
   /**
    * The type of protocol for this service
    */
   serviceType(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An audio, video, or text chat.
  */
 export interface Chat {
   /**
    * A guid identifier for this chat.
    */
   id(): string;
   /**
    * The service which is participating in this chat.
    */
   service(): any;
   /**
    * Other participants of this chat. This property may be specified at time of creation.
    */
   participants(): any;
   /**
    * Is this chat secure?
    */
   secure(): boolean;
   /**
    * Is this an invitation to a chat?
    */
   invitation(): boolean;
   /**
    * Is this chat currently active?
    */
   active(): boolean;
   /**
    * The date on which this chat started.
    */
   started(): any;
   /**
    * The date when this chat was last updated.
    */
   updated(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A text chat.
  */
 export interface TextChat {
   /**
    * The subject of this chat, if available.
    */
   subject(): string;
   /**
    * An invitation message. This may only be specified at the time of creation. This message will be sent to chat participants when the chat is created.
    */
   invitationMessage(): string;
   /**
    * How you are joined to this chat
    */
   joinState(): any;
   /**
    * The address or room name of this chat. This property may be specified at time of creation.
    */
   name(): string;
   /**
    * The type of this chat.
    */
   chatType(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A request to be added to someone else's buddy list
  */
 export interface AuthorizationRequest {
   /**
    * The guid for this authorization request
    */
   id(): string;
   /**
    * The service on which authorization was requested.
    */
   service(): any;
   /**
    * The buddy requesting authorization
    */
   buddy(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A file being sent or received
  */
 export interface FileTransfer {
   /**
    * The guid for this file transfer
    */
   id(): string;
   /**
    * The name of this file
    */
   name(): string;
   /**
    * The local path to this file transfer
    */
   file(): any;
   /**
    * The direction in which this file is being sent
    */
   direction(): any;
   /**
    * The service on which this file transfer is taking place
    */
   service(): any;
   /**
    * The account participating in this file transfer
    */
   buddy(): any;
   /**
    * Is this file transfer secure?
    */
   secure(): boolean;
   /**
    * The total size in bytes of the completed file transfer
    */
   fileSize(): number;
   /**
    * The number of bytes that have been transferred
    */
   fileProgress(): number;
   /**
    * The current status of this file transfer
    */
   transferStatus(): any;
   /**
    * The date that this file transfer started
    */
   started(): any;
 }
    
    // CLass Extension
    
    // Records

    // Function options

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CloseOptionalParameter {
      /**
       * Whether or not changes should be saved before closing.
       */
      saving?: any;
      /**
       * The file in which to save the document.
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
       * The type of file to save.
       */
      as?: string;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SetOptionalParameter {
      /**
       * The new value.
       */
      to: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface QuitOptionalParameter {
      /**
       * Whether or not changed documents should be saved before closing.
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
       * The location for the new object(s).
       */
      to?: any;
      /**
       * Properties to be set in the new duplicated object(s).
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
      withContents?: any;
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

    export interface InviteOptionalParameter {
      to: any;
      /**
       * For text chats, an invitation message to send to this participant. This parameter is required for text chat invitations and ignored for other types of chats.
       */
      withMessage?: string;
    }



    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SendOptionalParameter {
      to: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ShowChatChooserOptionalParameter {
      for: any;
    }






}
export interface Messages extends Messages.Application {
    // Functions

     /**
      * Open a document.
      * @param directParameter The file(s) to be opened.
      * 
      */
     open(directParameter: {}, ): void;

     /**
      * Close a document.
      * @param directParameter the document(s) or window(s) to close.
      * @param option
      * 
      */
     close(directParameter: any, option?: Messages.CloseOptionalParameter): void;

     /**
      * Save a document.
      * @param directParameter The document(s) or window(s) to save.
      * @param option
      * 
      */
     save(directParameter: any, option?: Messages.SaveOptionalParameter): void;

     /**
      * Set an object's data.
      * @param directParameter undefined
      * @param option
      * 
      */
     set(directParameter: any, option?: Messages.SetOptionalParameter): void;

     /**
      * Print an object.
      * @param directParameter The file(s) or document(s) to be printed.
      * 
      */
     print(directParameter: any, ): void;

     /**
      * Quit the application.

      * @param option
      * 
      */
     quit(option?: Messages.QuitOptionalParameter): void;

     /**
      * Return the number of elements of a particular class within an object.
      * @param directParameter the object whose elements are to be counted
      * @param option
      * @return the number of elements
      */
     count(directParameter: any, option?: Messages.CountOptionalParameter): number;

     /**
      * Delete an object.
      * @param directParameter the object to delete
      * 
      */
     delete(directParameter: any, ): void;

     /**
      * Copy object(s) and put the copies at a new location.
      * @param directParameter the object(s) to duplicate
      * @param option
      * @return to the duplicated object(s)
      */
     duplicate(directParameter: any, option?: Messages.DuplicateOptionalParameter): any;

     /**
      * Verify if an object exists.
      * @param directParameter the object in question
      * @return true if it exists, false if not
      */
     exists(directParameter: any, ): boolean;

     /**
      * Get the data for an object.
      * @param directParameter undefined
      * @return undefined
      */
     get(directParameter: any, ): any;

     /**
      * Make a new object.

      * @param option
      * @return to the new object
      */
     make(option?: Messages.MakeOptionalParameter): any;

     /**
      * Move object(s) to a new location.
      * @param directParameter the object(s) to move
      * @param option
      * @return to the moved object(s)
      */
     move(directParameter: any, option?: Messages.MoveOptionalParameter): any;

     /**
      * Invites a buddy to join an existing chat.
      * @param directParameter undefined
      * @param option
      * 
      */
     invite(directParameter: {}, option?: Messages.InviteOptionalParameter): void;

     /**
      * Log in to the specified service, or all services if none is specified. If the account password is not in the keychain the user will be prompted to enter one.
      * @param directParameter undefined
      * 
      */
     logIn(directParameter?: {}, ): void;

     /**
      * Logs out of a service, or all services if none is specified.
      * @param directParameter undefined
      * 
      */
     logOut(directParameter?: {}, ): void;

     /**
      * Sends a message or file to a buddy or to a chat.
      * @param directParameter undefined
      * @param option
      * 
      */
     send(directParameter: {}, option?: Messages.SendOptionalParameter): void;

     /**
      * Stores the currently set buddy picture into your recent pictures.

      * 
      */
     storeRecentPicture(): void;

     /**
      * displays a dialog in Messages to start a new chat with the specified buddy

      * @param option
      * 
      */
     showChatChooser(option?: Messages.ShowChatChooserOptionalParameter): void;

     /**
      * Takes a snapshot of a video chat and saves it to a desktop.
      * @param directParameter undefined
      * 
      */
     takeSnapshot(directParameter: {}, ): void;

     /**
      * Accepts an incoming text, audio, or video chat invitation, or file transfer
      * @param directParameter undefined
      * 
      */
     accept(directParameter: {}, ): void;

     /**
      * Declines an incoming text, audio, or video chat invitation, or file transfer
      * @param directParameter undefined
      * 
      */
     decline(directParameter: {}, ): void;

     /**
      * Sends a recording request to all participants of an audio or video chat. Recording will not start until all participants have agreed to allow recording.
      * @param directParameter undefined
      * 
      */
     requestRecording(directParameter: {}, ): void;

     /**
      * Ends recording of an audio or video chat.
      * @param directParameter undefined
      * 
      */
     stopRecording(directParameter: {}, ): void;
}
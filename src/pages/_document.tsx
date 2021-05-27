// Import dependencies
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';

class CustomDocument extends Document {
  /**
   * Gets the initial props for a given document context
   *
   * @param ctx - the document's context
   */
  public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return Document.getInitialProps(ctx);
  }
}

export default CustomDocument;

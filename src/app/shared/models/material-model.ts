/**
 * Model for the Material
 *
 */

export interface MaterialModel {
  MIDAS_NUMBER: string;
  MIDAS_Id: string;
  Owner: any;
  Sample_Description: string;
  MIDAS_CREATION_DATE: Date;
  MIDAS_REQUESTER: string;
  MIDAS_SAMPLE_DESCRIPTION: string;
  MIDAS_REFERENCE: string;
  MIDAS_CHEM_ID: string;
  TEST: Test[];
  Tests: any;
  TESTING_DB: TestingDB[];
  GENEALOGY: Genealogy[];
}

export interface Document {
  DOCUMENT_ID : string;
  DOCUMENT_TITLE : string;
  DOCUMENT_DATE : string;
  DOCUMENT_TEXT_SNIPPET : string;
  DOCUMENT_AUTHOR: string;
  UNQ_FILE_NAMES:string;

}

export interface Genealogy {
  CHILD_PROCESS_ID?: string;
  CHILD_MIDAS_NUMBER?: string;
  GRAND_PARENT_MIDAS_NUMBER?: string;
  GRAND_PARENT_PROCESS_ID?: string;
  PARENT_MIDAS_NUMBER?: string;
  PARENT_PROCESS_ID?: string;
}

export interface Test {
  checked: true;
  TEST_METHOD: string;
  TEST_METHOD_DESCR: string;
  TEST_FACILITY_SYMBOL: string;
  TEST_DATE_REQUESTED?: Date;
  IMAGES: Images[];
  TEST_RESULT: TestResult[];
}

export interface Images {
  imageId?: string;
  imageUrl?: string;
  imageName?: string;
  imageDesc?: string;
  imageCreated?: string;
}

export interface TestResult {
  TR_IDNUM?: number;
  TR_IDNUM_DESCRIPTION: string;
  TR_FORMATTED_RESULT: string;
  TR_F_RESULT?: number;
  TR_FLAGS: string;
  TR_UNIT: string;
}

export interface TestingDB {
  CHILD_SAMPLE_ID?: number;
  CHILD_SAMPLE_DESCRIPTION?: string;
  FEED_ID?: number;
  FEED_DESCRIPTION?: string;
  MATERIAL_BALANCE_NUMBER?: string;
  INTERVALSTART?: Date;
  INTERVALEND?: Date;
  PROCESS_CONDITION?: string;
  COMMENTS?: string;
}

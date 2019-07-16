export const ColorModeList = ['Color', 'Gray', 'Mono', 'Auto'];
export const ColorMode = ['Color', 'Gray', 'Mono', 'Auto'];
export const FeedTrayList = ['Auto', 'MP', 'T1', 'T2', 'T3', 'T4', 'T5'];
export const PageSizeList = ['Letter', 'Auto', 'A4', 'A3', 'A5', 'A5L', 'A6', 'B5', 'Legal', 'IndiaLegal',
'MexicoLegal', 'Executive', 'Hagaki', 'Folio', 'Com10', 'Monarch', 'C5', 'DL'];
export const CopyQuality = ['Best', 'Normal', 'Fast'];
export const Layout = ['Normal', '2in1', '4in1'];
export const LayoutOrientation = ['Portrait', 'Landscape'];
export const DuplexCopyPageLayout = ['LongToLongEdge', 'LongToShortEdge', 'ShortToLongEdge', 'ShortToShortEdge'];
export const FaxQuality = ['Standard', 'Fine', 'SuperFine', 'Photo'];
export const PrintQuality = ['Normal', 'Fine'];
export const Resolution = ['High', 'Normal', 'Low', '600', '400', '200' , '150', '100', '200x100', 'Auto'];
export const FileType = ['TIFF', 'JPEG', 'PDF', 'XPS', 'SignedPDF', 'SecurePDF' , 'PDFA', 'HighCompressedPDF'];
export const DocSize = ['Letter', 'Auto', 'A4', 'A3', 'A5', 'A5L', 'A6', 'B5', 'Legal', 'IndiaLegal',
  'MexicoLegal', 'Executive', 'Hagaki', 'Folio', 'Com10', 'Monarch', 'BusinessCard', 'LongPaper', 'Photo2L',
'PhotoL', '4times6'];
export const PaperType = ['Plain', 'Thin', 'Recycled', 'Thick', 'Thicker', 'Bond', 'Label',
'Envelope', 'EnvelopeThin', 'EnvelopeThick', 'Letterhead', 'Colored'];
export const Density = ['Highest', 'Higher', 'Normal', 'Lower', 'Lowest'];
export const Brightness = ['Highest', 'Higher', 'Normal', 'Lower', 'Lowest'];
export const SkipBlankPageSensitivity = ['Highest', 'Higher', 'Normal', 'Lower', 'Lowest'];
export const ScanTray = ['FB', 'ADF', 'Auto'];
export const RemoveBackground = ['High', 'Normal', 'Low', 'Off'];
export const JpgQuality = ['High', 'Normal', 'Low', 'Off'];
export const ScanToEmailDefault = {
  TxProfiles: {
    Smtp: {
      Destination: 'rubingajera1@gmail.com',
      Subject: 'Test Subject',
      MsgBody: 'MSGBODY HERE',
      FileName: 'Rubin'
    }
  },
  FileNameFixed: true,
  ScanTray: 'Auto', 						// ScanTray
  ColorMode: 'Color', 						// ColorModeList
  Resolution: 'Normal', 					// Resolution
  DocSize: 'Auto', 						// DocSize
  Density: 'Higher', 						// selectionList_1
  Brightness: 'Normal', 					// selectionList_1
  JpgQuality: '', 					// selectionList_2
  FileType: 'JPEG',						// FileType
  SPdfPassword: '',
  SinglePageFile: true,
  AdditionalAdfScan: true,
  ResumeAfterError: true,
  AutoDeskew: true,
  SkipBlankPage: true,
  SkipBlankPageSensitivity: '', 		// selectionList_1
  RemoveBackground: '', 				// selectionList_2
  DuplexScanEnable: true,
  ShortEdgeBinding: true,
  ColorDetectionAccuracyLevel: '',
  GrayDetectionAccuracyLevel: '',
  Margin: '',							// Margin
  JobFinAckUrl: ''
};

const SHEET_NAME = 'gastos'; 

function getSheet() {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error(`No existe una pestaña llamada "${SHEET_NAME}"`);
  }

  return sheet;
}

function doGet(e) {
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();

  data.shift();

  const gastos = data.map(row => ({
    id: row[0],
    fecha: row[1],
    descripcion: row[2],
    monto: row[3]
  }));

  return ContentService
    .createTextOutput(JSON.stringify(gastos))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const sheet = getSheet();
  const body = JSON.parse(e.postData.contents);

  const id = sheet.getLastRow();

  sheet.appendRow([
    id,
    new Date(),
    body.descripcion,
    body.monto
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({
      ok: true,
      message: 'Gasto guardado correctamente'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
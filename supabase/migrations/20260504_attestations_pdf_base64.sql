-- Stockage du PDF et du nombre de modules dans les attestations
alter table attestations add column if not exists pdf_base64 text;
alter table attestations add column if not exists nb_modules integer;

-- CREATE DATABASE
CREATE DATABASE PLGCOMETRONIC;

-- CREATE TB_PRODUTO
CREATE TABLE TB_PRODUTO(
	CODIGO								INTEGER 			NOT NULL,
  	NOME								VARCHAR(255)		NOT NULL,
  	DATA_ULTIMA_ALTERACAO				TIMESTAMP				NULL,
  	USUARIO_UTLTIMA_ALTERACAO			VARCHAR(100)			NULL
);

-- CREATE TABLE
ALTER TABLE TB_PRODUTO MODIFY CODIGO INTEGER AUTO_INCREMENT PRIMARY KEY;

-- INSERT INTO
INSERT INTO TB_PRODUTO(CODIGO, NOME) VALUES(NULL, 'Monitor LED 25'' Gamer LG MBR 25UM58G 2560 x 1080 UltraWide IPS Full HD 1ms');
INSERT INTO TB_PRODUTO(CODIGO, NOME) VALUES(NULL, 'Monitor LED 29" LG 29wk500 2560x1080 Ultrawide Ips Full Hd');
INSERT INTO TB_PRODUTO(CODIGO, NOME) VALUES(NULL, 'Monitor Led 27" Full Hd Curvo Lc27f390 Free Sync');
INSERT INTO TB_PRODUTO(CODIGO, NOME) VALUES(NULL, 'Monitor Curvo Samsung 32" Fhd, Com Speaker Embutido, Hdmi, Display Port, Vga, 75hz,freesync, Preto, Série T550');
INSERT INTO TB_PRODUTO(CODIGO, NOME) VALUES(NULL, 'Monitor Led 24" Full Hd Preto Curvo Lc24f390');
INSERT INTO TB_PRODUTO(CODIGO, NOME) VALUES(NULL, 'Monitor Gamer Curvo Samsung 49'', DFHD, 32:9, 144 Hz, 1ms, HDMI, DP,Freesync,HAS, preto, série CHG90');

-- SELECT 
SELECT * FROM TB_PRODUTO;
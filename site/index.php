<?php
/**
 * Clínica Maria Nutri - Site One Page
 *
 * Configurado para implantação imediata na Hostinger (PHP 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / Apache / LiteSpeed)
 * Este arquivo garante compatibilidade tanto em servidores configurados para buscar index.php
 * quanto index.html como DirectoryIndex padrão.
 */

// Define cabeçalhos de segurança e codificação UTF-8
header('Content-Type: text/html; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('Referrer-Policy: strict-origin-when-cross-origin');

// Carrega a página estática sem overhead
include_once __DIR__ . '/index.html';

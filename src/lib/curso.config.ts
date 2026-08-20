// A CONFIG DE CURSO — o que muda entre EN/DE/FR/IT→Espanha (e o futuro →França)
// mora AQUI e só aqui. Componentes agnósticos de língua (busca, tradutor,
// bolso do viajante) leem daqui; nenhum deles tem par de idioma ou moeda
// hard-coded. Derivar um SKU novo = copiar este arquivo e trocar os valores.

export const curso = {
  /**
   * Identidade do SKU, e ela NÃO é cosmética: é o namespace de
   * localStorage. Todos os cursos servem de aleapc.github.io/<curso>/, e
   * localStorage é por ORIGEM, não por caminho — sem isto, os cursos leem e
   * sobrescrevem o progresso uns dos outros.
   */
  sku: 'curso-japao-zh',
  /** Idioma do comprador (a voz-guia). */
  buyerLang: 'zh',
  /** Idioma do destino (a fala nativa ensinada). */
  targetLang: 'ja',
  /** Par para o link do Google Tradutor: sl = comprador, tl = destino. */
  translatorPair: { sl: 'zh', tl: 'ja' },
  /** Moeda do destino. */
  destCurrency: 'JPY',
  /**
   * Moedas de "casa" do comprador que vale converter no bolso do viajante.
   * Vazio quando o comprador já usa a moeda do destino (ex.: DE/FR/IT→Espanha,
   * todos em EUR) — nesse caso o /bolso mostra a nota "mesma moeda", sem conversor.
   */
  homeCurrencies: ['CNY'] as string[],
  timeZone: 'Asia/Tokyo',
  cidadeExibicao: '东京',
  faixasNow: [
    { de: 0, linha: '厨房陆续打烊，但附近总有一家居酒屋或拉面馆还亮着灯。' },
    { de: 5 * 60, linha: '城市几乎还没醒。街角24小时便利店从未打烊——咖啡和饭团已经备好。' },
    { de: 7 * 60, linha: '酒店早餐和便利店都能应付——出门前先来杯热咖啡、拿个饭团。' },
    { de: 9 * 60, linha: '清晨的安静时段。咖啡馆和喫茶店都开着门；你不算晚，只是早。' },
    { de: 11 * 60 + 30, linha: '午餐时段开始。不少店到下午初都供应套餐（定食）——赶在上班族高峰之前。' },
    { de: 12 * 60, linha: '午饭时间：定食套餐和拉面馆到1点前会迅速坐满。单人座位很快被占。' },
    { de: 14 * 60, linha: '午餐渐渐收尾。喫茶店和咖啡馆仍开着，供应咖啡和一块蛋糕。' },
    { de: 15 * 60, linha: '两餐之间的安静空档。便利店和咖啡馆能撑到晚饭时间。' },
    { de: 17 * 60 + 30, linha: '居酒屋开始开门迎客。晚饭前先来杯啤酒配点小菜——夜晚就是这样开始的。' },
    { de: 19 * 60, linha: '晚餐正当时：居酒屋和餐厅现在都坐满了。不管有没有预约，这个点来得正好。' },
    { de: 22 * 60, linha: '虽然晚了，但留意ラストオーダー（最后点单）的告示——很多厨房比店门关得更早。' },
    { de: 23 * 60 + 30, linha: '如果要坐电车回去，留意終電（末班车）——过了这班车，就只能打车或熬到天亮了。' }
  ] as { de: number; linha: string }[]
} as const;

export type CursoConfig = typeof curso;

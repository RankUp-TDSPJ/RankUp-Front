/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
    },
    extend: {
      colors: {
        verde: {
          // usado só em hover de botão preenchido e em texto sobre fundo claro
          profundo: '#1F4830',
          // verde da marca (está no logo): títulos, botões, fundo do rodapé
          escuro: '#2A6041',
          // destaque em texto: 4,7:1 sobre o fundo, passa no AA para texto normal
          medio: '#3D7A52',
          // decorativo: só ponta clara de gradiente, nunca texto sobre fundo claro
          claro: '#5FA678',
          // fundo suave de selos, ícones e caixas de apoio
          suave: '#E8F3EC',
        },
        // fundo da página: off-white neutro, sem o amarelado do bege anterior
        fundo: '#F5F7F4',
        // texto principal e texto de apoio
        grafite: '#333333',
        cinza: '#666666',
        borda: {
          DEFAULT: '#E4E8E3',
          forte: '#C9D1C8',
        },
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      keyframes: {
        // entrada suave: o conteúdo sobe alguns pixels enquanto aparece
        'sobe-fade': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'sobe-fade': 'sobe-fade 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}

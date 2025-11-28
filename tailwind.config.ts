import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			FiraSans: [
  				'Fira Sans',
  				'sans-serif'
  			]
  		},
  		colors: {
  			PrimaryColor: {
  				DEFAULT: '#2a2b76',
  				'0': '#2a2b76'
  			},
  			AccentColor: {
  				DEFAULT: '#cd553b',
  				'0': '#cd553b'
  			},
  			SecondaryColor: {
  				DEFAULT: '#92bec0',
  				'0': '#92bec0'
  			},
  			White: {
  				DEFAULT: '#ffffff',
  				'0': '#ffffff'
  			},
  			PrimaryColor2: {
  				DEFAULT: '#cd553b',
  				'0': '#cd553b'
  			},
  			Secondarycolor: {
  				DEFAULT: '#2a2b76',
  				'0': '#2a2b76'
  			},
  			Secondarycolor2: {
  				DEFAULT: '#2a2b76',
  				'0': '#2a2b76'
  			},
  			HeadingColor: {
  				DEFAULT: '#2a2b76',
  				'0': '#2a2b76'
  			},
  			HeadingColor2: {
  				DEFAULT: '#2a2b76',
  				'0': '#2a2b76'
  			},
  			TextColor: {
  				DEFAULT: '#6b7a7a',
  				'0': '#6b7a7a'
  			},
  			TextColor2: {
  				DEFAULT: '#6b7a7a',
  				'0': '#6b7a7a'
  			},
  			BodyBg: {
  				DEFAULT: '#f4f8f9',
  				'0': '#f4f8f9'
  			},
  			DarkBg: {
  				DEFAULT: '#2a2b76',
  				'0': '#2a2b76'
  			},
  			BodyBg2: {
  				DEFAULT: '#2a2b76',
  				'0': '#2a2b76'
  			},
  			BodyBg3: {
  				DEFAULT: '#92bec0',
  				'0': '#92bec0'
  			},
  			BodyBg4: {
  				DEFAULT: '#f4f8f9',
  				'0': '#f4f8f9'
  			},
  			BorderColor: {
  				DEFAULT: '#e6eaea',
  				'0': '#e6eaea'
  			},
  			BorderColor2: {
  				DEFAULT: '#ffffff33',
  				'0': '#ffffff33'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		screens: {
  			sm: '576px',
  			md: '768px',
  			lg: '992px',
  			xl: '1200px',
  			'2xl': '1400px',
  			'3xl': '1600px',
  			'4xl': '1700px'
  		},
  		keyframes: {
  			movebtn: {
  				'0%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(20px)'
  				}
  			},
  			dance7: {
  				'0%': {
  					transform: 'translateX(0px)'
  				},
  				'100%': {
  					transform: 'translateX(320px)'
  				}
  			},
  			dance3: {
  				'0%': {
  					transform: 'translateX(0px)'
  				},
  				'100%': {
  					transform: 'translateX(-35px)'
  				}
  			},
  			shrink: {
  				'0%': {
  					transform: 'translateY(20px) translateX(-50%)'
  				},
  				'50%': {
  					transform: 'translateY(-20px) translateX(-50%)'
  				},
  				'100%': {
  					transform: 'translateY(0px) translateX(-50%)'
  				}
  			},
  			Dance: {
  				'0%,100%': {
  					transform: 'translateX(0px)'
  				},
  				'50%': {
  					transform: 'translateX(35px)'
  				}
  			},
  			dance4: {
  				'0%,100%': {
  					transform: 'translateX(0px)'
  				},
  				'50%': {
  					transform: 'translateX(570px)'
  				}
  			},
  			dance5: {
  				'0%,100%': {
  					transform: 'translateX(0px)'
  				},
  				'50%': {
  					transform: 'translateX(330px)'
  				}
  			},
  			rotateme: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			dance2: {
  				'0%': {
  					transform: 'translate3d(0, 0, 0)'
  				},
  				'50%': {
  					transform: 'translate3d(25px, -25px, 0)'
  				},
  				'100%': {
  					transform: 'translate3d(0, -25px, 25px)'
  				}
  			},
  			headerSlideDown: {
  				'0%': {
  					margin: '-150px 0 0'
  				},
  				'100%': {
  					margin: '0'
  				}
  			},
  			zoomInOut: {
  				'0%': {
  					transform: 'scale(0.5)'
  				},
  				'100%': {
  					transform: 'scale(1.2)'
  				}
  			},
  			swing: {
  				'0%': {
  					transform: 'rotate(-25deg)'
  				},
  				'100%': {
  					transform: 'rotate(0deg)'
  				}
  			},
  			wiggle: {
  				'0%, 100%': {
  					transform: 'translateY(-50px)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			rotational: {
  				from: {
  					transform: 'rotate(0deg)'
  				},
  				to: {
  					transform: 'rotate(360deg)'
  				}
  			},
  			rotate: {
  				from: {
  					transform: 'rotate(0deg)'
  				},
  				to: {
  					transform: 'rotate(360deg)'
  				}
  			}
  		},
  		animation: {
  			movebtn: 'movebtn 3s linear infinite',
  			wiggle: 'wiggle 5s ease-in-out infinite',
  			rotational: 'rotational 10s linear infinite',
  			rotate: 'rotate 20s linear infinite',
  			zoomInOut: 'zoomInOut 2s alternate infinite',
  			dance2: 'dance2 3s alternate infinite',
  			dance3: 'dance3 2s alternate infinite',
  			dance4: 'dance4 10s alternate infinite',
  			dance5: 'dance5 10s alternate infinite',
  			dance7: 'dance7 4s alternate infinite',
  			swing: 'swing 1s ease-in-out 1s forwards infinite alternate',
  			headerSlideDown: '500ms ease-in-out 0s normal none 1 running headerSlideDown'
  		},
  		boxShadow: {
  			cases: '0px 10px 15px rgba(187, 187, 187, 0.2)',
  			shade: '0px 0px 20px rgba(187, 187, 187, 0.2)',
  			shades: '0px 5px 40px rgba(189, 202, 202, 0.35)',
  			shadow: '0px 30px 50px rgba(152,178,240,0.5)'
  		},
  		dropShadow: {
  			'custom-shadow': '0px 10px 40px rgba(12, 110, 109, 0.1)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

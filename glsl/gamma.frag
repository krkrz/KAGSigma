precision mediump float;
varying vec2 v_texCoord;
uniform sampler2D s_tex0;
uniform vec3 a_floor;
uniform vec3 a_gamma; // 1.0 / gamma
uniform vec3 a_amp; // ceil - floor
void main()
{
	vec4 color = texture2D( s_tex0, v_texCoord );
	vec3 rate = log( color.rgb );
	vec3 n = exp( rate * a_gamma ) * a_amp + a_floor;
	clamp( n, 0.0, 1.0 );
	gl_FragColor = vec4( n, color.a );
}

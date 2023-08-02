<script>
    export let size = 24
    export let color = 'currentColor'
    export let strokeWidth = 2

    let clazz = ''
    export { clazz as class }
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-%%ORIGINAL_NAME%% {clazz}"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    stroke-width={strokeWidth}
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
>
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 7l16 0"></path>
   <path d="M10 11l0 6"></path>
   <path d="M14 11l0 6"></path>
   <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
   <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
</svg>
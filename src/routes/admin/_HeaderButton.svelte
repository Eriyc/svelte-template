<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { IconSource } from '@steeze-ui/svelte-icon/types';

	import { page } from '$app/stores';

	export let icon: IconSource;
	export let href: string;
</script>

<a
	{href}
	class="my-2 flex flex-row items-center gap-2 rounded-sm px-4 py-2 transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-600 {$page
		.url.pathname === href && 'dark:bg-neutral-600 bg-neutral-300'}"
>
	<Icon src={icon} theme="solid" class="h-6 w-6  fill-black dark:fill-white" />
	<p class="text-black dark:text-white"><slot /></p></a
>

<script lang="ts">
	import { User, DocumentText, Clipboard } from '@steeze-ui/heroicons';
	import HeaderButton from './_HeaderButton.svelte';
</script>

<section class="flex flex-row gap-2 dark:bg-neutral-700">
	<HeaderButton icon={Clipboard} href="/admin">Dashboard</HeaderButton>
	<HeaderButton icon={User} href="/admin/users">Användare</HeaderButton>
	<HeaderButton icon={DocumentText} href="/admin/posts">Inlägg</HeaderButton>
</section>

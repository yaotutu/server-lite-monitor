export class CountingMap<K, V> {
	private map = new Map<K, V>(); // 存储数据
	private getCounter = 0; // 获取计数器
	private readonly updateThreshold: number; // 更新阈值
	private readonly updateFunction: () => void; // 更新数据的函数

	constructor(updateThreshold: number, updateFunction: () => void) {
		this.updateThreshold = updateThreshold;
		this.updateFunction = updateFunction;

		// 在实例化时立即调用更新函数
		this.updateFunction();
	}

	// 更新或添加数据
	public update(key: K, value: V): void {
		this.map.set(key, value);
	}

	// 根据键获取数据，并增加计数器
	public get(key: K): V | undefined {
		this.getCounter++; // 每次获取数据时增加计数器
		if (this.getCounter >= this.updateThreshold) {
			this.resetCounter(); // 重置计数器
			this.updateFunction(); // 达到阈值后，调用更新函数
		}

		// 尝试获取数据
		let result: V | undefined;
		try {
			result = this.map.get(key);

			if (result === undefined) {
				// 如果结果为 undefined，立即更新
				this.updateFunction();
				result = this.map.get(key); // 再次尝试获取
			}

			if (result === undefined) {
				// 如果再次失败，抛出错误
				throw new Error(`Data for key '${key}' is not available after update.`);
			}
		} catch (error) {
			// 捕获异常，抛出详细错误信息
			throw new Error(`Error retrieving data for key '${key}': ${error}`);
		}

		return result; // 返回找到的数据
	}

	public getAll(): Map<K, V> {
		return this.map;
	}

	// 重置计数器
	private resetCounter(): void {
		this.getCounter = 0;
	}
}
